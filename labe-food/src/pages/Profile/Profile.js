import React, { useContext, useEffect, useState } from "react";
import { baseURL } from "../../constants/baseurl";
import { useNavigate } from "react-router";
import { createRenderer } from "react-dom/test-utils";
import { goToEditAddress, goToEditProfile } from "../../routes/coordinator";
import axios from "axios";
import useRequestData from "../../hooks/useRequestData";
import { TrendingUpOutlined } from "@mui/icons-material";
import {
  CardStyled,
  DivPerfil,
  NewContainer,
  OrderContainer,
  OrderHistory,
  PersonaInformation,
  TextUltimate,
  Title,
  TypographyMargin,
  TypographyStyled,
} from "./styled-profile";
import { Container, AddressContainer, TextNew, StyledHistory } from "./styled-profile";
import EditIcon from "@mui/icons-material/Edit";
import { Typography, CardContent, Card } from "@mui/material";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import Navigation from "../../components/Navigation/Navigation";
import useProtectedPage from "../../hooks/useProtectedPage";

const Profile = () => {
  const navigate = useNavigate();
  useProtectedPage();

  const [userData] = useRequestData([], `${baseURL}/profile`);
  const [history] = useRequestData([], `${baseURL}/orders/history`)
  console.log("histórico, ", history)



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

  const ordersHistory =
    history && history.orders &&
    history.orders.map((order) => {
      const date = new Date(order.expiresAt)
      const fullDate = date.toDateString()

      return (
        <CardStyled key={order.createdAt}>
          <CardContent>
            <TypographyMargin color="primary"> {order.restaurantName}</TypographyMargin>
            <TypographyMargin variant="caption">{fullDate}</TypographyMargin> <br />
            <TypographyStyled>SUBTOTAL R${order.totalPrice.toFixed(2)}</TypographyStyled>
          </CardContent>
        </CardStyled>
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
          <OrderContainer>
            <TextUltimate> Histórico de Pedidos</TextUltimate>

            {ordersHistory}
          </OrderContainer>
          {/* <OrderHistory>
    <p>Histórico de pedidos</p> */}
        </div>

        {/*        
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
        </OrderHistory> */}
      </Container>
      <Navigation screen={2} />
    </>
  );
};
export default Profile;
