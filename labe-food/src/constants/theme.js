import { createTheme } from "@mui/material";
import { greyish, lipstick, barMain, black } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: lipstick,
      contrastText: black,
    },
    secondary: {
      main: greyish,
    },
    bar: {
      main: barMain,
      contrastText: black,
    },
    bar2: {
      main: greyish,
      contrastText: barMain,
    },
    success: {
      main: lipstick,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          main: greyish,
          fontSize: ".8rem",
          padding: "0.6rem",
          marginTop: "0.65rem",
          borderRadius: 2,
          letterSpacing: 2,
          textTransform: "capitalize",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontsize: "1rem",
          borderRadius: 2,
        },
        input: {
          color: "secondary",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          fontsize: "1rem",
          borderRadius: 2,
        },
        fieldset: {
          color: "primary",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          color: greyish,
        },
      },
    },
  },
});

export default theme;
