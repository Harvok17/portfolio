import { useEffect } from "react";
import GlobalStyle from "./components/styled-components/globalStyles";
import particles from "./particles";

import {
  Particles,
  Wrapper,
} from "./components/styled-components/styledComponents";

function App() {
  useEffect(() => {
    window.particlesJS("particles-js", particles);
  }, []);
  return (
    <Wrapper>
      <GlobalStyle />
      <Particles id="particles-js" />
    </Wrapper>
  );
}

export default App;
