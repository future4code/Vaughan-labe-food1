import React, { useContext, useEffect, useState } from "react";
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
import {
  MainContainer,
  AddressContainer,
  RestaurantContainer,
  ShippingContainer,
  PaymentContainer,
} from "./styled-cart";
import Header from '../../components/Header/Header'
import Navigation from "../../components/Navigation/Navigation";
import Restaurant from "../../components/Restaurant/Restaurant";
import { ButtonDiv, CardProducts, ProductImage, ProductText, TypographyStyled } from "../../components/Restaurant/styled-restaurant";

import useProtectedPage from "../../hooks/useProtectedPage";

const Cart = () => {
  useProtectedPage();
  const { restaurants, productsInCart, setProductsInCart, restaurantId } = useContext(GlobalStateContext);
  const [profile] = useRequestData([], `${baseURL}/profile`);
  const [orderData, getData] = useRequestData([], `${baseURL}/active-order`);
  const [paymentValue, setPaymentValue] = useState('')
  const [open, setOpen] = useState(false);
  const token = window.localStorage.getItem("token")
  const [productData, setProductData] = useState([])
 

  const handleClick = () => {
    setOpen(true);
    placeOrder()
  };

  const onChange = (e) => {
    setPaymentValue(e.target.value)
  };

  useEffect(() => {
    productsInCart.map((product) => {
    productData.push({id: product.id, quantity: product.quantity})
    })
  }, [])

  console.log("restaurante", productsInCart)

 console.log("carrinho", productData)


  const removeFromCart = (id) => {
    const newProductsInCart = productsInCart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    setProductsInCart(newProductsInCart)
  };

  const renderProducts = productsInCart.map((product) => {
    return (
      <CardProducts key={product.id} variant='outlined'>
          <ProductImage
            component='img'
            height='150'
            image={product.photoUrl}
            alt='Foto do Restaurante'
          />
          <ProductText>
            <TypographyStyled variant='body' color='primary'>
              {product.name}
            </TypographyStyled>
            <TypographyStyled variant='body2' color='secondary'>
              {product.description}
            </TypographyStyled>
            <TypographyStyled variant='body'>
              R${product.price}0
            </TypographyStyled>
          </ProductText>
          <ButtonDiv>
              <Button variant='outlined' color='inherit' onClick={() => {removeFromCart(product.id)}}>
                Remover
              </Button> 
           </ButtonDiv>
          </CardProducts>
    )
  })

  const placeOrder = () => {
    const body = {
      products: productData,
      paymentMethod: paymentValue
    }
    axios.post(`${baseURL}/restaurants/${restaurantId}/order`, body, { headers: {
      auth: token
    }}
  ).then((res) => {
    console.log("parabéns", res.data.message)
    
  }).catch((err) => {

    console.log(body, err.response)
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
        return item.id === restaurantId;
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
        return item.id === restaurantId;
      })
      .map((item) => {
        return (
          <ShippingContainer key={item.id}>
            <Typography>Frete: R${item.shipping}</Typography>
          </ShippingContainer>
        );
      });
  console.log("valor total", orderData.order)

  return (
    <MainContainer>
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

      {productData.length !== 0 ? renderProducts : <Typography>Carrinho vazio</Typography>}
      
      {deliveryPrice}
      
      <Typography>Subtotal: R${orderData.order && orderData.order.totalPrice}</Typography>
      
      <PaymentContainer>
        <Typography>Forma de pagamento</Typography>
        <hr />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value={'money'}
            control={<Radio />}
            label="Dinheiro"
            onChange={onChange}
          />
          <FormControlLabel
            value={"creditcard"}
            control={<Radio />}
            label="Cartão de crédito"
            onChange={onChange}
          />
        </RadioGroup>
        <Button fullWidth variant="contained" 
        onClick={handleClick}
        >
          Confirmar
        </Button>
        {activeOrder}
      </PaymentContainer>
      <Navigation screen={1}/>
    </MainContainer>
  );
};

export default Cart;
