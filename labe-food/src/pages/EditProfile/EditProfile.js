import React, { useContext, useState } from "react";
import axios from "axios";
import { baseURL } from "../../constants/baseurl";
import { Button, TextField, Typography } from "@mui/material";
import logocolor from "../../assets/images/logocolor.png";
import useForm from "../../hooks/useform.js";
import { useNavigate } from "react-router-dom";
import { MainContainer , StyledForm } from "./styled-editprofile"
import { PutAdress } from "../../services/apiEnd";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToProfile } from "../../routes/coordinator";

const EditProfile = () => {
  const navigate = useNavigate();
  const {userData , getUserData} = useContext(GlobalStateContext);

  const { form, onChange, clear } = useForm({
    name: (userData.user && userData.user && userData.user.name ),
    email: (userData.user && userData.user && userData.user.email ),
    cpf: (userData.user && userData.user && userData.user.cpf ),
  });


   const response =(data)=> { 
       console.log(data)

   }
  
  

  const onSubmitForm = (event) => {
    event.preventDefault();
    PutAdress(form, "profile" ,response)

    goToProfile(navigate)
 
    
  };

  return (
  <>
  <Header title="Editar" />
    <MainContainer>
      
      <StyledForm onSubmit={onSubmitForm}>
        <TextField
          id="outlined-required"
          name={"name"}
          value={form.name}
          onChange={onChange}
          label={"Nome"}
          placeholder={"Nome e sobrenome"}
          type="text"
          margin={"normal"}
          required
          fullWidth
        />
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          placeholder={"email@email.com"}
          fullWidth
          type="text"
          margin={"normal"}
          required
        />
        <TextField
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          label={"CPF"}
          placeholder={"000.000.000-00"}
          fullWidth
          type="text"
          margin={"normal"}
          required
          inputProps={{pattern:"[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}"}}
        />
      
        
        <Button
          variant="contained"
          type="submit"
          color="primary"
          margin={"normal"}
          fullWidth
        >
          Salvar
        </Button>
      </StyledForm>
    </MainContainer>
    </>
  );
};

export default EditProfile;

