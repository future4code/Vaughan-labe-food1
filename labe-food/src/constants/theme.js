import { createTheme } from '@mui/material';
import { borderRadius } from '@mui/system';
import { greyish, lipstick } from './colors';


const theme = createTheme({
  palette: {
    primary: {
      main: lipstick,
      contrastText:"#000"
    },
    secondary: {
      main: greyish,
    }, 
      
    },
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            fontSize: '1rem',
            padding: "1rem",
            margin: " 1rem 0",
            borderRadius: 2,
            textTransform: "capitalize",
          },

        },
      },MuiTextField:{ 
        styleOverrides :{
          root:{ 
            // margin:"0.8rem",
            // fontSize: '1rem',
       
          }
        },
      },MuiInputBase:{ 
        styleOverrides: { 
          root:{ 
            padding: 0,
            borderRadius:2,
          }, input:{ 
            fontsize:"1rem",

          }

        }
      }
      
      
    },
        
});

export default theme;