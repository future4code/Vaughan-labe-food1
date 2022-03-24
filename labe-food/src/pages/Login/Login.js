import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import useForm from "../../hooks/useform";
import { goToAddress, goToEditAddress, goToHome, goToSignUp } from "../../routes/coordinator";
import { LoginData } from "../../services/login";
import logocolor from "../../assets/images/logocolor.png";
import { StyledForm, StyledBoxImag } from "./styled-login";
import SplashScreenPage from "../SplashScreenPage/SplashScreenPage";

const Login = () => {
  const { addressData, getDataAddress, isLoadingAddress, errorAddress } =
    useContext(GlobalStateContext);
  const navigate = useNavigate();
  const [loginDataUp, setLoginDataUp] = useState("");
  const [splashScreentime, setSplashScreentime] = useState(true);
  const { form, onChange, clear } = useForm({
    email: "",
    password: "",
  });

  useEffect(()=>{ 
    getDataAddress()

  }, [])

  setTimeout(()=> {
    setSplashScreentime(false)
  }, 4000)


  const dataUp = (data) => {
    if (data.token && data.user.hasAddress) {
      goToHome(navigate);
      return;
    } else if (data.token) {
      goToAddress(navigate);
    } else return;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    LoginData(form, dataUp);
  };

  return (
    <>
    { splashScreentime ? 
      
       <SplashScreenPage/> :
       
       <StyledBoxImag>
        <img src={logocolor} style={{ width: "6.5rem" }} />

        <Typography align='center'>Entrar</Typography>

        <StyledForm onSubmit={onSubmit}>
          <TextField
            required
            name='email'
            value={form.email}
            onChange={onChange}
            label='E-mail'
            color='primary'
            variant='outlined'
            placeholder='email@email.com'
            margin='dense'
            fullWidth
          />
          <TextField
            required
            fullWidth
            name='password'
            value={form.password}
            onChange={onChange}
            label='Senha'
            variant='outlined'
            inputProps={{ pattern: "[a-zA-Z0-9]{6,}" }}
            color='primary'
            placeholder='Minimo 6 caracteres'
            margin='dense'
            type="password"
          />

          <Button
            type='form'
            font='black'
            margin='none'
            color='primary'
            variant='contained'
          >
            Entrar
          </Button>
        </StyledForm>

        <Button
          onClick={() => goToSignUp(navigate)}
          style={{ textTransform: "none" }}
          color='inherit'
          size='small'
          align='center'
        >
          Não possui cadastro? Clique aqui.
        </Button>
      </StyledBoxImag> }
    </>
  );
};

export default Login;
