import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./layout/main";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VisitCard from './components/visitcard/visitcard';
import Header from "./components/Header/Header";
import Mysvg from "./svgcourse/svgtest";
import Svgproj1 from "./svgprojects/project1/project1";
function App() {
    const theme = createTheme();

  return (
      <>
          <ThemeProvider theme={theme}>
              <Router>
                  {/*<Header/>*/}
                  {/*<Main/>*/}
                  {/*<VisitCard/>*/}
                  {/*<Mysvg/>*/}
                  <Svgproj1/>
              </Router>
        </ThemeProvider>
      </>
  );
}

export default App;
