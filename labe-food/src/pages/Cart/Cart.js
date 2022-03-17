import React, { useContext, useState } from "react";
import axios from 'axios'
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Snackbar
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
import Header from '../../components/Header/Header'
import useForm from "../../hooks/useform";
import Navigation from "../../components/Navigation/Navigation";

const Cart = () => {
  const { restaurants, productsInCart } = useContext(GlobalStateContext);
  const [profile] = useRequestData([], `${baseURL}/profile`);
  const [orderData] = useRequestData([], `${baseURL}/active-order`)
  const { form, onChange, clear } = useForm({
    products: [
      {
        id: 'xhq0QgZXklGSmaBDy6KQ',
        quantity: 1
      }
    ],
    paymentMethod: 'creditcard'
  });
  const params = useParams();
  const [open, setOpen] = useState(false)
  const token = window.localStorage.getItem("token")

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    placeOrder();
    clear();
  };

  const placeOrder = () => {
    const body = productsInCart;
    axios.post(`${baseURL}/restaurants/${params.id}/order`, body, { headers: {
      auth: token
    }}
  ).then((res) => {
    console.log(res.data)
  }).catch((err) => {
    console.log(err.response)
  })
  }


  const activeOrder = () => {
    if(orderData && orderData.order){
    return (
      <Snackbar
          open={open}
          autoHideDuration={orderData.order.expiresAt - orderData.order.createdAt}
          message={orderData.order.restaurantName}
          // color="primary" 
          // orderData.order.totalPrice
      />
    )
    }}
 
  const cardRestaurantDetails =
    restaurants.restaurants &&
    restaurants.restaurants
      .filter((item) => {
        return item.id === params.id;
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
        return item.id === params.id;
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
      <Header title="Meu Carrinho"/>
      
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
        <form onSubmit={onSubmitForm}>
        <Typography>Forma de pagamento</Typography>
        <hr />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="creditcard"
          name="radio-buttons-group"
        >
          <FormControlLabel
            name={'paymentMethod'}
            value={'money'}
            control={<Radio />}
            label="Dinheiro"
            onChange={onChange}
          />
          <FormControlLabel
            name={"paymentMethod"}
            value={form.paymentMethod}
            control={<Radio />}
            label="Cartão de crédito"
            onChange={onChange}
          />
        </RadioGroup>
        <Button fullWidth variant="contained" 
        onClick={handleClick}
        type="submit"
        >
          Confirmar
        </Button>
        </form>
        {activeOrder}
      </PaymentContainer>
      <Navigation />
    </div>
  );
};

export default Cart;
