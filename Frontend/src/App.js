import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./layout/main";
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {
    const theme = createTheme();
  return (
      <>
        <ThemeProvider theme={theme}>
            <Router>
                <Main/>
            </Router>
        </ThemeProvider>
      </>
  );
}

export default App;
