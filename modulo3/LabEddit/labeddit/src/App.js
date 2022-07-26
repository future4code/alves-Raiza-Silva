import React from "react"
import Router from "./routes/Routes"
import {ThemeProvider} from "@material-ui/core/styles"
import theme from "./contants/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router/>
    </ThemeProvider>
  );
}

export default App;
