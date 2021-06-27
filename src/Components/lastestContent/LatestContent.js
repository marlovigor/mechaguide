import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Content from "../../data";

const useStyles = makeStyles({
  div: {
    marginTop: 30,
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
  title: {
    fontSize: 20,
  },
});

export default function LatestContent() {
  const classes = useStyles();

  const [content, changcontent] = useState(Content);

  const cards = content.map((item) => {
    return (
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.img}
              // title={item.name}
            />
            <CardContent>
              <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
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

  return (
    <div className={classes.div}>
      <h2 className="Latest_header" style={lastes_header}>
        Latest Content
      </h2>
      {cards}
    </div>
  );
}

const lastes_header = {
  textAlign: "left",
  position: "relative",
  left: "40px",
  fontSize: 18,
};
