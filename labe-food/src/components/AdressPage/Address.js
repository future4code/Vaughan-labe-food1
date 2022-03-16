import React from "react";
import {useNavigate} from 'react-router-dom';
import { Button, TextField, Typography } from "@mui/material";
import { StyledForm} from "./styled-address";
import { PutAdress } from "../../services/apiEnd";
import useform from '../../hooks/useform';
import { goToHome } from "../../routes/coordinator";
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader";


const Address = ({title, title2}) => {
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
    PutAdress(form, "address" ,response)
  }



  return (




    <>
    {/* Olhar esta navegacao depois  */}
     
      <Header title={title} />
      <SubHeader title2={title2} />
      

      <StyledForm onSubmit={onSubmit}>
        <TextField
          required
          name='street'
          value={form.street}
          onChange={onChange}
          label='Logradouro'
          color="primary"
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
          color="primary"
          placeholder='Número'
          margin='dense'
        />
        <TextField
          name='complement'
          color="primary"
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
          color="primary"
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
          color="primary"
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
          color="primary"
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

export default Address;
