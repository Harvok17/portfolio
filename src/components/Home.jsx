import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import React from "react";
import { DisplayImage, IconsWrapper } from "./styledComponents";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { GitHub, LinkedIn, Mail } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Monospace, Arial",
    color: "#f2f2f2",
  },
  buttonGroup: {
    margin: "20px 0 20px 0",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <DisplayImage>
        <Link
          color="inherit"
          href="https://github.com/Harvok17/portfolio"
          target="_blank"
          underline="none"
        >
          <GitHub fontSize="large" />
          <br />
          View Portfolio Code
        </Link>
      </DisplayImage>
      <h1>&lt; Harvey Granfil /&gt;</h1>
      <h2>&#47;&#47; Web Developer</h2>
      <Typography align="center" gutterBottom paragraph>
        I'm a self-taught software developer from Rizal, Philippines. I'm always
        curious to learn new things that are related to programming and build
        amazing stuff.
      </Typography>
      <ButtonGroup
        className={classes.buttonGroup}
        variant="contained"
        size="large"
      >
        <Button>My Projects</Button>
        <Button
          variant="contained"
          color="secondary"
          href="https://www.google.com"
          target="_blank"
        >
          Download CV
        </Button>
      </ButtonGroup>
      <IconsWrapper>
        <IconButton
          color="inherit"
          href="https://github.com/Harvok17"
          target="_blank"
        >
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/j-h-g/"
          target="_blank"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton color="inherit" href="mailto:jhgranfil@gmail.com">
          <Mail fontSize="large" />
        </IconButton>
      </IconsWrapper>
    </Container>
  );
};

export default Home;
