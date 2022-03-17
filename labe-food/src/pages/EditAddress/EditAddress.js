import React, { useContext } from "react";
import Address from "../../components/AdressPage/Address";
import {useNavigate} from 'react-router-dom';
import { Button, TextField, Typography } from "@mui/material";
import { StyledForm} from "./styled-editaddress";
import { PutAdress } from "../../services/apiEnd";
import useform from '../../hooks/useform';
import { goToHome } from "../../routes/coordinator";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";
import { baseURL } from "../../constants/baseurl";


const EditAddress = () => {

  const { dataAdressDown } = useContext(GlobalStateContext)
  // const [dataAdressDown] = useRequestData([], `${baseURL}/profile/address`)
  const navigate = useNavigate();

      console.log(dataAdressDown)

    const teste  = dataAdressDown.address && dataAdressDown.address

  const response =(data)=> 
  { 
    console.log(data.data.token)
    localStorage.setItem("token", data.data.token)
    console.log(data.data.user)
    console.log(data.data.user.hasAddress)
     if( data.data.user.hasAddress && data.data.token){ 
      goToHome(navigate)
     }else { 
       alert( "Entre com o Endereço ")
       return; 
     }
  }
     
  const onSubmit = (e) => {
    e.preventDefault()
    PutAdress(form, "address" ,response)
  }

   console.log("teste", teste)
   const teste1 = teste && teste
   console.log("teste1", teste1)
   
   const { form, onChange, clear } = useform( dataAdressDown.address && teste.address);
     
  return (




    <>
   
    {/* Olhar esta navegacao depois  */}
     
      <Header title={"Endereço"} />
      

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

export default EditAddress;














