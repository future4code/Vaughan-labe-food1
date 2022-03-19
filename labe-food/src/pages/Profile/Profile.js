import React, { useContext, useEffect } from "react";
import { baseURL } from "../../constants/baseurl";
import { useNavigate } from "react-router";
import { goToEditAddress, goToEditProfile } from "../../routes/coordinator";
import useRequestData from "../../hooks/useRequestData";
import {
  CardStyled,
  MainDiv,
  NewContainer,
  OrderContainer,
  TextUltimate,
  TypographyMargin,
  TypographyStyled,
} from "./styled-profile";
import { Container, AddressContainer, TextNew } from "./styled-profile";
import EditIcon from "@mui/icons-material/Edit";
import { Typography, CardContent } from "@mui/material";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import useProtectedPage from "../../hooks/useProtectedPage";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const Profile = () => {
  const navigate = useNavigate();
  useProtectedPage();
  const { userData, getUserData, setName, setEmail, setCpf, namePut } = useContext(GlobalStateContext);

  // const [userData, getUserData,] = useRequestData([], `${baseURL}/profile`);
  const [history] = useRequestData([], `${baseURL}/orders/history`)

 useEffect(()=> { 
   getUserData(`${baseURL}/profile`)
   console.log ( "chamando profile"  )

  //  const [userData , getUserData ,isLoadingUserData ] = useRequestData([], `${baseURL}/profile`);
 },[])

  const changeProfile = () => {
    if(userData){
      setName(userData.user && userData.user && userData.user.name )
      setEmail(userData.user && userData.user && userData.user.email)
      setCpf(userData.user && userData.user && userData.user.cpf)
      goToEditProfile(navigate);
    }

    };

  const changeAdress = () => {
    goToEditAddress(navigate);
  };


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
    <MainDiv>
      <Header title='Meu Perfil' goBack={true} />
      <Container>
        <div>
          <NewContainer>
            {userData.user ? (
              <TextNew>
                <p> {userData.user.name}</p>
                <p> {namePut}</p>
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
        </div>

      </Container>
      <Navigation screen={2} />
    </MainDiv>
  );
};
export default Profile;
