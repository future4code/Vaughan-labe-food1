import { ThemeProvider } from "@mui/material";
import theme from './constants/theme'
import GlobalState from "./global/GlobalState";
import Router from "./routes/Router";
import { GlobalStyle } from "./styled-app";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
