import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Code from "@material-ui/icons/Code";
import Slider from "./slider/Slider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 315,
    background: "#616161",
    color: "#f2f2f2",
  },
  space: {
    justifyContent: "space-around",
  },
});

const ProjectCard = ({ project }) => {
  const { name, live, repo, images } = project;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Slider images={images} />
      <CardContent>
        <Typography align="center" variant="h5">
          {name}
        </Typography>
      </CardContent>
      <CardActions className={classes.space}>
        <Button
          variant="contained"
          href={live}
          target="_blank"
          rel="noreferrer"
          startIcon={<VisibilityIcon />}
        >
          View Live
        </Button>
        <Button
          variant="contained"
          rel="noreferrer"
          href={repo}
          target="_blank"
          startIcon={<Code />}
          color="secondary"
        >
          View Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
