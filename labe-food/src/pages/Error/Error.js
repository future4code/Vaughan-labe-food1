import { MainStyled } from "./styled-error"
import logowhite from "../../assets/images/whitelogo/logowhite.png";
import { Typography } from "@mui/material";
import { barMain } from "../../constants/colors";

const Error = () => {
  return (
    <MainStyled>
      <div>
        <Typography variant='h1' color={barMain}>
          404
        </Typography>
        <Typography component='body' variant='h5'>
          Você está no lugar errado
        </Typography>
        <Typography component='body' variant='h6'>
          confere o endereço digitado.
        </Typography>
        <img src={logowhite} />
      </div>
    </MainStyled>
  );
};

export default Error;
