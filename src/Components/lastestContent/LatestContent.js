import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Content from "../../data"

const useStyles = makeStyles({
  div:{
    marginTop:50,

  },
  root: {
    marginBottom: 30,
    maxWidth: 345,
    margin: "0 auto",
    borderRadius: 20,
  },
  media: {
    height: 200,
  },
});

export default function LatestContent() {
  const classes = useStyles();

  const [content, changcontent] = useState(Content)

  // const [content, changcontent] = useState([
  //   {
  //     name: "learn of the world of gundam",
  //     img: "/imageAssets/Gundam-Feature.jpg",
  //     description: "Probably the most random thing you have ever seen!",
  //   },
  //   {
  //     name: "chars counter attack",
  //     description: "Hello World!",
  //     img: "/imageAssets/Mobile.jpg",
  //   },
  //   {
  //     name: "learn of the world of gundam",
  //     img: "/imageAssets/Gundam-Feature.jpg",
  //     description: "Probably the most random thing you have ever seen!",
  //   },
  //   {
  //     name: "chars counter attack",
  //     description: "Hello World!",
  //     img: "/imageAssets/Mobile.jpg",
  //   },
  // ]);

  const cards = content.map((item) => {
    return (
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.img}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  });

  return <div className={classes.div}>{cards}</div>;
}
