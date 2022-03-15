import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom';
import { StyledForm , StyledBoxImag} from "./styled-login";
import { Button, TextField, Typography } from "@mui/material";
import useForm from '../../hooks/useform';
import { goToHome } from "../../routes/coordinator";
import {LoginData} from "../../services/login";
import logocolor from "../../assets/images/logocolor.png"



const Login = () => {

    // const navigate = useNavigate();
    const [loginDataUp , setLoginDataUp] = useState('');
    const { form, onChange, clear } = useForm({
        email: "",
        password: "",
      });
  
     
      const dataUp = (data) => { 
          console.log(data.user.hasAdress)

      }
    

      const onSubmit = (e) => {
        e.preventDefault()
        LoginData(form, dataUp)
     
      }
    


    return (
        <>
        <StyledBoxImag>

        <img src={logocolor}  style={{width:"6.5rem"}} />
     
        <Typography align='center'>Entrar</Typography>

        <StyledForm onSubmit={onSubmit}>
          <TextField
            required
            name='email'
            value={form.email}
            onChange={onChange}
            label='E-mail'
            color="secondary"
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
            color="secondary"
            placeholder='Minimo 6 caracteres'
            margin='dense'
            />
   
  
          <Button type='form' 
          font="black"
          margin="none"
          color='primary' 
          variant='contained' >
            Entrar
          </Button>
          </StyledForm>

          <Button
          style={{textTransform:"none"}}
          color="inherit"
          size="small"
          align='center'>Não possui cadastro? Clique aqui.</Button>
          </StyledBoxImag>
      </>
    )
};

export default Login;