import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { GitHub, LinkedIn, Mail } from "@material-ui/icons";
import { DisplayImage, IconsWrapper } from "./styledComponents";
import { Link as RouterLink } from "react-router-dom";

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
  gitHub: {
    color: "#e0e0e0",
    "&:hover": {
      color: "white",
    },
  },
  linkedIn: {
    color: "#0072b1",
    "&:hover": {
      color: "#328ec0",
    },
  },
  mail: {
    color: "#ea4335",
    "&:hover": {
      color: "#ee685d",
    },
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <DisplayImage>
        <Link
          className={classes.gitHub}
          href="https://github.com/Harvok17/portfolio"
          target="_blank"
          underline="none"
          rel="noreferrer"
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
        <Button component={RouterLink} to="/projects">
          My Projects
        </Button>
        <Button
          color="secondary"
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </Button>
      </ButtonGroup>
      <IconsWrapper>
        <Link
          className={classes.gitHub}
          href="https://github.com/Harvok17"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub fontSize="large" />
        </Link>
        <Link
          className={classes.linkedIn}
          href="https://www.linkedin.com/in/j-h-g/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn fontSize="large" />
        </Link>
        <Link
          className={classes.mail}
          href="mailto:jhgranfil@gmail.com"
          rel="noreferrer"
        >
          <Mail fontSize="large" />
        </Link>
      </IconsWrapper>
    </Container>
  );
};

export default Home;
