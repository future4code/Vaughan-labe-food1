import { createTheme } from '@mui/material';
import { greyish, lipstick } from './colors';


const theme = createTheme({
  palette: {
    primary: {
      main: lipstick,
    },
    secondary: {
      main: greyish,
    },
  },
});

export default theme;