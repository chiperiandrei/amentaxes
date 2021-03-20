const gql = require("graphql-tag");

module.exports = gql`
  type Users {
    id: ID!
    username: String!
    email: String!
    lastname: String!
    firstname: String!
  }
  type User {
    id: ID!
    username: String!
    token: String!
    email: String!
    lastname: String!
    firstname: String!
    createdAt: String!
  }
  type NewUser {
    username: String!
    email: String!
    lastname: String!
    firstname: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
    firstname: String!
    lastname: String!
  }
  type File {
    url: String!
  }
  type Car {
    id: ID!
    make: String!
    model: String!
    modelYear: String!
    color: String
    vin: String!
    clutchType: String
    oilRevision: String
    itpExpireDate: String
    rcaExpireDate: String
    roVigneteExpireDate: String
  }
  type Query {
    getUsers: [Users]!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    enrollCar(make: String!, model: String!, vin: String!): Car!
    login(username: String!, password: String!): User!
    uploadAvatar(file: Upload!): File!
  }
  type Subscription {
    newUser: NewUser!
    newCar: Car!
  }
`;
