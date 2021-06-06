import { useEffect } from "react";
import particles from "./particles";
import {
  Footer,
  Particles,
  Wrapper,
  MainWrapper,
} from "./components/styledComponents";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: grey[800],
    },
  },
});

function App() {
  useEffect(() => {
    window.particlesJS("particles-js", particles);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <CssBaseline />
        <Particles id="particles-js" />
        <MainWrapper>
          <Home />
        </MainWrapper>
        <Footer>&copy; 2021 Harvey Granfil</Footer>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
