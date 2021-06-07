import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
import projectData from "../project-data";
import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIosRounded from "@material-ui/icons/ArrowBackIosRounded";
import particles from "../particles";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    window.particlesJS("particles-js", particles);
  }, []);

  return (
    <Container>
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIosRounded />}
      >
        Back to Home
      </Button>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid container item justify="center">
          <Typography gutterBottom variant="h3" style={{ color: "#f2f2f2" }}>
            My Projects
          </Typography>
        </Grid>

        {projectData.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
