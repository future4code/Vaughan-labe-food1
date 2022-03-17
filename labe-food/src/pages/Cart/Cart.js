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
import { useParams } from "react-router-dom";
import {
  MainContainer,
  AddressContainer,
  RestaurantContainer,
  ShippingContainer,
  PaymentContainer,
} from "./styled-cart";
import Header from '../../components/Header/Header'
import useForm from "../../hooks/useform";
import Navigation from "../../components/Navigation/Navigation";
import Restaurant from "../../components/Restaurant/Restaurant";
import { ButtonDiv, CardProducts, ProductImage, ProductText, TypographyStyled } from "../../components/Restaurant/styled-restaurant";

import useProtectedPage from "../../hooks/useProtectedPage";

const Cart = () => {
  useProtectedPage();
  const { restaurants, productsInCart, setProductsInCart, restaurantId } = useContext(GlobalStateContext);
  const [profile] = useRequestData([], `${baseURL}/profile`);
  const [orderData] = useRequestData([], `${baseURL}/active-order`);
  const [paymentValue, setPaymentValue] = useState('')
  const params = useParams();
  const [open, setOpen] = useState(false);
  const token = window.localStorage.getItem("token")
  const [productData, setProductData] = useState([])

  console.log(restaurantId)
  console.log(productData)

  const handleClick = () => {
    setOpen(true);
    placeOrder()
  };

  const onChange = (e) => {
    setPaymentValue(e.target.value)
  };

  // const getProductData = productsInCart.map((product) => {
  //   return setProductData([...productData, {id: product.id, quantity: product.quantity}])
  // })

  useEffect(() => {
    productsInCart.map((product) => {
      return setProductData([...productData, {id: product.id, quantity: product.quantity}])
    })
  }, [])


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
    console.log(body, res.data)
    
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

      {renderProducts}
      
      {deliveryPrice}
      <p>SUBTOTAL: VALOR TOTAL COM FRETE</p>
      <PaymentContainer>
        <Typography>Forma de pagamento</Typography>
        <hr />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="creditcard"
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
        type="submit"
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
