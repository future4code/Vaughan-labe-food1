import React from "react";
import {useNavigate} from 'react-router-dom';
import { Button, TextField, Typography } from "@mui/material";
import { BasicCard, StyledForm, StyledCabecalho } from "./styled-addaddress";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { PutAdress } from "../../services/apiEnd";
import useform from '../../hooks/useform';
import { goToHome } from "../../routes/coordinator";



// const styles = {
//   "&.MuiButton-root": {
//     // border: "2px black solid"
//     padding: "10px",
//   },
//   "&.MuiButton-text": {
//     color: "red"
//   },
//   "&.MuiButton-contained": {
//     color: "black"
//   },
//   "&.MuiButton-outlined": {
//     color: "brown"
//   }
// };

const AddAddress = () => {
  const navigate = useNavigate();
  const { form, onChange, clear } = useform({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });


  const response =(data)=> 
  { 
    console.log(data.data.token)
    localStorage.setItem("token", data.data.token)
    console.log(data.data.user)
    console.log(data.data.user.hasAddress)
     if( data.data.user.hasAddress && data.data.token){ 
      goToHome(navigate)
     }else { 
       return; 
     }
  }
     
  const onSubmit = (e) => {
    e.preventDefault()
    PutAdress(form, response)
  }



  return (




    <>
      <ArrowBackIosRoundedIcon />
      <hr />
      <Typography align='center'>Meu endereço</Typography>

      <StyledForm onSubmit={onSubmit}>
        <TextField
          required
          name='street'
          value={form.street}
          onChange={onChange}
          label='Logradouro'
          color="secondary"
          variant='outlined'
          placeholder='Rua / Av'
          margin='dense'
        />
        <TextField
          required
          name='number'
          value={form.number}
          onChange={onChange}
          label='Número'
          
          variant='outlined'
          color="secondary"
          placeholder='Número'
          margin='dense'
        />
        <TextField
          name='complement'
          color="secondary"
          value={form.complement}
          onChange={onChange}
          label='Complemento'
          placeholder='Apto/Bloco'
          margin='dense'
        />
        <TextField
          required
          name='neighbourhood'
          value={form.neighbourhood}
          onChange={onChange}
          label='Bairro'
          color="secondary"
          variant='outlined'
          placeholder='Bairro'
          margin='dense'
        />

        <TextField
          required
          name='city'
          value={form.city}
          onChange={onChange}
          label='Cidade'
          color="secondary"
          variant='outlined'
          placeholder='Cidade'
          margin='dense'
        />
        <TextField
          required
          name='state'
          value={form.state}
          onChange={onChange}
          label='Estado'
          color="secondary"
          variant='outlined'
          placeholder='Estado'
          margin='dense'
        />
        <Button type='form' 
        font="black"
        color='primary' 
        variant='contained' >
          Salvar
        </Button>
      </StyledForm>
    </>
  );
};

export default AddAddress;
