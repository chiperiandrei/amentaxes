import { Grow, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducers";
import {
  CarsAvalaible,
  WelcomeMessage,
  Wrapper
} from "../shared/styled/GlobalStyle";

export default function Dashboard() {
  const data = useSelector((state: RootState) => state.user_information);
  const sal = [1, 2, 3, 4, 5, 6];
  return (
    <Wrapper>
      <WelcomeMessage>
        Welcome back, <span id="userName"> {data?.firstname}</span>
      </WelcomeMessage>
      <CarsAvalaible>
        {sal.map((number, index) => (
          <Grow in={true} timeout={index * 1000}>
            <Card style={{ marginTop: 10 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Passat B7 2012"
                  style={{ height: 150, width: 400 }}
                  image={process.env.PUBLIC_URL + "passatbt.jpg"}
                  title="Un Passat corect"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Delete
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grow>
        ))}
      </CarsAvalaible>
    </Wrapper>
  );
}
