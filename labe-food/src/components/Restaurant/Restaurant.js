import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseURL } from "../../constants/baseurl";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";
import Header from "../Header/Header";
import {
  ButtonAdd,
  ButtonDiv,
  CardProducts,
  CardRestaurant,
  MainDiv,
  ProductImage,
  ProductText,
  ShippingAndTime,
  TimeStyled,
  TypographyStyled,
} from "./styled-restaurant";

const Restaurant = () => {
  const params = useParams();
  const [restaurantDetails] = useRequestData([], `${baseURL}/restaurants/${params.id}`);
  const { productsInCart, setProductsInCart } = useContext(GlobalStateContext);

  const cardRestaurant = restaurantDetails.restaurant;

  // Tentando separar os produtos por categoria!!

  // useEffect(() => {
  //     addingCategory()
  // }, [restaurantDetails])

  // const addingCategory = () => {
  //     if (cardRestaurant) {
  //         let category = []
  //         let p = 0
  //         for (let i = 0; i < cardRestaurant.products.length; i++) {
  //             console.log(cardRestaurant.products[i].category)
  //             if (cardRestaurant.products[i].category !== category.name) {
  //                 category.push({ name: cardRestaurant.products[i].category, products: [cardRestaurant.products[i]] })
  //             }
  //         }
  //         console.log(category)
  //     }
  // }

  const addToCart = (id) => {
    const cartProduct = productsInCart.find(product => id === product.id)

    if (cartProduct) {
      const newProductsInCart = productsInCart.map(product => {
        if (id === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })

      setProductsInCart(newProductsInCart)
    } else {
      const addProduct = cardRestaurant.products.find(product => id === product.id)

      const newProductsInCart = [...productsInCart, { ...addProduct, quantity: 1 }]

      setProductsInCart(newProductsInCart)
    }
  };

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

  const renderProducts =
    cardRestaurant &&
    cardRestaurant.products.map((product) => {
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
            <ButtonAdd variant='outlined' color='inherit' onClick={() => { addToCart(product.id) }}>
              Adicionar
            </ButtonAdd>
            <button onClick={() => { removeFromCart(product.id) }}>remover</button>
          </ButtonDiv>
        </CardProducts>
      );
    });

  console.log(productsInCart)

  return (
    <>
      <Header title='Restaurante' />
      <MainDiv>
        {cardRestaurant && (
          <CardRestaurant>
            <CardMedia
              component='img'
              height='150'
              image={cardRestaurant.logoUrl}
              alt='Foto do Restaurante'
            />
            <CardContent>
              <Typography variant='body' component='div' color='primary'>
                {cardRestaurant.name}
              </Typography>
              <Typography variant='body2' color='secondary'>
                {cardRestaurant.category}
              </Typography>
              <ShippingAndTime>
                <TimeStyled variant='body2' color='secondary'>
                  {cardRestaurant.deliveryTime} min
                </TimeStyled>
                <Typography variant='body2' color='secondary'>
                  Frete R${cardRestaurant.shipping},00
                </Typography>
              </ShippingAndTime>

              <Typography variant='body2' color='secondary'>
                {cardRestaurant.address}
              </Typography>
            </CardContent>
          </CardRestaurant>
        )}
        {cardRestaurant && renderProducts}
      </MainDiv>
    </>
  );
};

export default Restaurant;
