import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {BasicCard , StyledForm} from './styled-addaddress';


const AddAddress = () => {
    return (
        

        <BasicCard>
            <hr/>
        <Typography align="center">Meu endereço</Typography>
        <StyledForm> 
          <TextField 
    
          label="Logradouro"
          required
          variant="outlined"
          placeholder="Rua / Av"
          margin="dense"   
          />
          <TextField 
          label="Número"
          required
          variant="outlined"
          placeholder="Número"
          margin="dense"   
          />
          <TextField 
          label="Complemento"
          placeholder="Apto/Bloco"
          margin="dense"   
          />
          <TextField 
          label="Bairro"
          required
          variant="outlined"
          placeholder="Bairro"
          margin="dense"   
          />
      
          <TextField 
          label="Cidade"
          required
          variant="outlined"
          placeholder="Cidade"
          margin="dense"   
          />
          <TextField 
          label="Estado"
          required
          variant="outlined"
          placeholder="Estado"
          margin="dense"   
          />
          <Button
          type="form"
          color="secondary"
          variant="contained"
          size="small"
          >Salvar</Button>
          </StyledForm>
        </BasicCard>
    )
};

export default AddAddress;