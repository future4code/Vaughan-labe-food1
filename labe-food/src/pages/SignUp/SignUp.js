import React from "react";
import axios from "axios";
import { baseURL } from "../../constants/baseurl";
import { Button, TextField, Typography} from "@mui/material";
import logocolor from "../../assets/images/logocolor.png"
import useForm from "../../hooks/useform.js"

const SignUp = () => {
  const {form, onChange, clear} = useForm({ name: "", email: "", cpf: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  const signUp = axios
    .post(`${baseURL}/signup`, form)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.response));

  return (
      <div>
        <img src={logocolor}/>
        <Typography>Cadastrar</Typography>
    <form onSubmit={onSubmitForm}>
      <TextField
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
      />
      <TextField
        name={"password"}
        value={form.password}
        onChange={onChange}
        label={"Senha"}
        placeholder={"Mínimo 6 caracteres"}
        fullWidth
        type="password"
        margin={"normal"}
        required
      />
      <TextField
        name={"password"}
        value={form.password}
        onChange={onChange}
        label={"Confirmar"}
        placeholder={"Confirme a senha anterior"}
        fullWidth
        type="password"
        margin={"normal"}
        required
      />
      <Button
        variant="contained"
        type="submit"
        color="primary"
        margin={"normal"}
        fullWidth
      >
        Criar
      </Button>
    </form>
    </div>
  );
};

export default SignUp;
