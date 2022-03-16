import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseURL } from "../../constants/baseurl";
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
  const [restaurantDetails] = useRequestData(
    [],
    `${baseURL}/restaurants/${params.id}`
  );

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
            <ButtonAdd variant='outlined' color='inherit'>
              Adicionar
            </ButtonAdd>
          </ButtonDiv>
        </CardProducts>
      );
    });

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
