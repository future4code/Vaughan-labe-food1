import React, { useContext } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";
import { baseURL } from "../../constants/baseurl";
import { useParams } from "react-router-dom";
import {
  AddressContainer,
  RestaurantContainer,
  ShippingContainer,
  PaymentContainer,
} from "./styled-cart";

const Cart = () => {
  const { restaurants } = useContext(GlobalStateContext);
  const [profile] = useRequestData([], `${baseURL}/profile`);
  const params = useParams();
  const restId = "1";


  const cardRestaurantDetails =
    restaurants.restaurants &&
    restaurants.restaurants
      .filter((item) => {
        return item.id === restId;
      })
      .map((item) => {
        return (
          <RestaurantContainer key={item.id}>
            <Typography color="primary" mb={0.5}>
              {item.name}
            </Typography>
            <Typography mb={0.5} color="secondary">
              {item.address}
            </Typography>
            <Typography color="secondary">
              {item.deliveryTime} minutos
            </Typography>
          </RestaurantContainer>
        );
      });

  const deliveryPrice =
    restaurants.restaurants &&
    restaurants.restaurants
      .filter((item) => {
        return item.id === restId;
      })
      .map((item) => {
        return (
          <ShippingContainer key={item.id}>
            <Typography>Frete: R${item.shipping}</Typography>
          </ShippingContainer>
        );
      });

  return (
    <div>
      <Typography align="center" mt={3}>
        Meu Carrinho
      </Typography>
      <AddressContainer>
        <Typography mb={0.5} color="secondary">
          Endereço de entrega
        </Typography>
        <Typography color="primary.textcontrast">
          {profile.user && profile.user.address}
        </Typography>
      </AddressContainer>

      {cardRestaurantDetails}

      <p>CARD DE CADA ITEM</p>
      {deliveryPrice}
      <p>SUBTOTAL: VALOR TOTAL COM FRETE</p>
      <PaymentContainer>
        <Typography>Forma de pagamento</Typography>
        <hr />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="cartao"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="dinheiro"
            control={<Radio />}
            label="Dinheiro"
          />
          <FormControlLabel
            value="cartao"
            control={<Radio />}
            label="Cartão de crédito"
          />
        </RadioGroup>
        <Button fullWidth variant="contained">
          Confirmar
        </Button>
      </PaymentContainer>
    </div>
  );
};

export default Cart;
