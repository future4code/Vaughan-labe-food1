import { ThemeProvider } from "@mui/material";
import theme from './constants/theme'
import Router from "./routes/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
