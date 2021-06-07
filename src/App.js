import { Footer, MainWrapper } from "./components/styledComponents";
import Home from "./components/Home";
import Projects from "./components/Projects";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blueGrey, grey } from "@material-ui/core/colors";
import { Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[400],
    },
    secondary: {
      main: grey[800],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </MainWrapper>
      <Footer>&copy; 2021 Harvey Granfil</Footer>
    </ThemeProvider>
  );
}

export default App;
