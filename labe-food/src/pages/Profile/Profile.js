import React, { useContext, useEffect, useState } from "react";
import { baseURL } from "../../constants/baseurl";
import { useNavigate } from "react-router";
import { createRenderer } from "react-dom/test-utils";
import { goToEditAddress, goToEditProfile } from "../../routes/coordinator";
import axios from "axios";
import useRequestData from "../../hooks/useRequestData";
import { TrendingUpOutlined } from "@mui/icons-material";
import {
  DivPerfil,
  NewContainer,
  OrderHistory,
  PersonaInformation,
  Title,
} from "./styled-profile";
import { Container, AddressContainer, TextNew } from "./styled-profile";
import EditIcon from "@mui/icons-material/Edit";
import { Typography, CardContent } from "@mui/material";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import Navigation from "../../components/Navigation/Navigation";
import useProtectedPage from "../../hooks/useProtectedPage";

const Profile = () => {
  const navigate = useNavigate();
  useProtectedPage();

  const [userData] = useRequestData([], `${baseURL}/profile`);
  // const [history] = useRequestData([], `${baseURL}/orders/history`)
  const history = [
    { totalPrice: 21, name: "McDonald", date: "21 outubro 2021" },
    { totalPrice: 21, name: "McDonald", date: 22 },
  ];

  // useEffect(() => {
  //   getUserData()
  // }, [])

  const changeProfile = () => {
    goToEditProfile(navigate);
  };

  const changeAdress = () => {
    goToEditAddress(navigate);
  };

//   useEffect(() => {
    //   orders()
//   }, [])

  const orders =
    history &&
    history.map((order) => {
      return (
        <>
          {" "}
          {order.name}
          {order.date}
          {order.totalPrice}
        </>
      );
    });

  return (
    <>
      <Header title='Meu Perfil' goBack={true} />
      <Container>
        <div>
          <NewContainer>
            {userData.user ? (
              <TextNew>
                <p> {userData.user.name}</p>
                <p>{userData.user.email}</p>
                <p> {userData.user.cpf}</p>
                <p>{orders}</p>
              </TextNew>
            ) : (
              <p>carregando </p>
            )}
            <div>
              <EditIcon onClick={changeProfile} />
            </div>
          </NewContainer>

          <AddressContainer>
            <div>
              <Typography mb={0.5} color='secondary'>
                Endereço cadastrado
              </Typography>
              <Typography color='primary.textcontrast'>
                {userData.user && userData.user.address}
              </Typography>
            </div>
            <div>
              <EditIcon onClick={changeAdress} />
            </div>
          </AddressContainer>

          {/* <OrderHistory>
    <p>Histórico de pedidos</p> */}
        </div>
        <OrderHistory>
          <CardContent>
            <Typography gutterBottom variant='body2' component='div'>
              Histórico de pedidos
            </Typography>
            {history.length > 0 ? (
              orders
            ) : (
              <Typography variant='body2' color='text.secondary'>
                Você não realizou nenhum pedido{" "}
              </Typography>
            )}
            <Typography variant='body2' color='text.secondary'></Typography>
          </CardContent>
        </OrderHistory>
      </Container>
      <Navigation screen={2}/>
    </>
  );
};
export default Profile;
