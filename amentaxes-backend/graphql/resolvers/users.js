const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");
const path = require("path");

const {
  validateRegisterInput,
  validateLoginInput,
  validateCarInput,
} = require("../../util/validators");
const checkAuth = require("../../util/check-auth");
const { SECRET_KEY } = require("../../config");
const User = require("../../models/User");
const Car = require("../../models/Car");
const fs = require("fs");

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
    },
    SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
}

module.exports = {
  Query: {
    async getUsers() {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async register(
      _,
      {
        registerInput: {
          username,
          email,
          password,
          confirmPassword,
          firstname,
          lastname,
        },
      },
      context,
      info
    ) {
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword,
        lastname,
        firstname
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username is taken");
      }
      password = await bcrypt.hash(password, 10);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
        firstname,
        lastname,
      });
      const res = await newUser.save();
      context.pubsub.publish("NEW_USER", {
        newUser: {
          firstname: res.firstname,
          lastname: res.lastname,
          email: res.email,
          createdAt: res.createdAt,
          username: res.username,
        },
      });

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
    async login(_, { username, password }) {
      const { valid, errors } = validateLoginInput(username, password);
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await User.findOne({ username });
      if (!user) {
        errors.general = "User not found!";
        throw new UserInputError("User not found", { errors });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Wrong credentials!";
        throw new UserInputError("Wrong credentials", { errors });
      }
      const token = generateToken(user);
      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async uploadAvatar(_, { file }, context, info) {
      //const user = checkAuth(context);
      // console.log(user);
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();
      const pathName = path.join(__dirname, `/public/images/${filename}`);
      console.log(pathName);
      await stream.pipe(fs.createWriteStream(pathName));

      return {
        url: `http://localhost:8000/images/${filename}`,
      };
    },
    async enrollCar(_, { make, model, vin }, context, info) {
      const user = checkAuth(context);

      const { valid, errors } = validateCarInput(make, model, vin);
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const car = await Car.findOne({ vin });
      if (car) {
        throw new UserInputError("Car is already in database");
      }

      const newCar = new Car({
        vin,
        make,
        model,
        createdAt: new Date().toISOString(),
      });
      const res = await newCar.save();
      const updateUser = await User.findByIdAndUpdate(
        user.id,
        { carId: res.id },
        { new: true }
      );
      context.pubsub.publish("NEW_CAR", {
        newCar: {
          make: res.make,
          createdAt: res.createdAt,
          model: res.model,
        },
      });

      return res;
    },
  },
  Subscription: {
    newUser: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("NEW_USER"),
    },
    newCar: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("NEW_CAR"),
    },
  },
};
