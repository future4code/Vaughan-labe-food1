import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { BasicCard, StyledForm, StyledCabecalho } from "./styled-addaddress";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const AddAddress = () => {
  const { form, onChange, clear } = useform({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  return (
    <BasicCard>
      <ArrowBackIosRoundedIcon />
      <hr />
      <Typography align='center'>Meu endereço</Typography>

      <StyledForm>
        <TextField
          name='street'
          value={form.street}
          onChange={onChange}
          label='Logradouro'
          required
          variant='outlined'
          placeholder='Rua / Av'
          margin='dense'
        />
        <TextField
          name='number'
          value={form.number}
          onChange={onChange}
          label='Número'
          required
          variant='outlined'
          placeholder='Número'
          margin='dense'
        />
        <TextField
          name='complement'
          value={form.complement}
          onChange={onChange}
          label='Complemento'
          placeholder='Apto/Bloco'
          margin='dense'
        />
        <TextField
          name='neighbourhood'
          value={form.neighbourhood}
          onChange={onChange}
          label='Bairro'
          required
          variant='outlined'
          placeholder='Bairro'
          margin='dense'
        />

        <TextField
          name='city'
          value={form.city}
          onChange={onChange}
          label='Cidade'
          required
          variant='outlined'
          placeholder='Cidade'
          margin='dense'
        />
        <TextField
          name='state'
          value={form.state}
          onChange={onChange}
          label='Estado'
          required
          variant='outlined'
          placeholder='Estado'
          margin='dense'
        />
        <Button type='form' color='secondary' variant='contained' size='small'>
          Salvar
        </Button>
      </StyledForm>
    </BasicCard>
  );
};

export default AddAddress;
