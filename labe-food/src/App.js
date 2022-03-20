import { Navigation } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./constants/theme";
import GlobalState from "./global/GlobalState";
import Router from "./routes/Router";
import { GlobalStyle } from "./styled-app";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
