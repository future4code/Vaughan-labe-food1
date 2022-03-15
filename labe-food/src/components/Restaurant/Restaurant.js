import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router";
import { baseURL } from "../../constants/baseurl";
import useRequestData from "../../hooks/useRequestData";
import { ButtonAdd, ButtonDiv, CardProducts, CardRestaurant, MainDiv, ProductImage, ProductText, TypographyStyled } from "./styled-restaurant";

const Restaurant = () => {
    const params = useParams();
    const [restaurantDetails] = useRequestData([], `${baseURL}/restaurants/${params.id}`);

    const cardRestaurant = restaurantDetails.restaurant

    const renderProducts = cardRestaurant && cardRestaurant.products.map((product) => {
        return (
            <CardProducts key={product.id} variant="outlined">
                <ProductImage
                    component="img"
                    height="150"
                    image={product.photoUrl}
                    alt="Foto do Restaurante"
                />
                <ProductText>
                    <TypographyStyled variant="body" color="primary">{product.name}</TypographyStyled>
                    <TypographyStyled variant="body2" color="secondary">{product.description}</TypographyStyled>
                    <TypographyStyled variant="body">R${product.price}</TypographyStyled>
                </ProductText>
                <ButtonDiv>
                    <ButtonAdd variant="outlined" color="inherit">Adicionar</ButtonAdd>
                </ButtonDiv>
            </CardProducts>
        )
    });

    return (
        <MainDiv>
            <h2>Restaurante</h2>
            {cardRestaurant &&

                <CardRestaurant>
                    <CardMedia
                        component="img"
                        height="150"
                        image={cardRestaurant.logoUrl}
                        alt="Foto do Restaurante"
                    />
                    <CardContent>
                        <Typography variant="body" component="div" color="primary">
                            {cardRestaurant.name}
                        </Typography>
                        <Typography variant="body2" color="secondary">{cardRestaurant.category}</Typography>
                        <Typography variant="body2" color="secondary">{cardRestaurant.deliveryTime} min</Typography>
                        <Typography variant="body2" color="secondary">Frete: R${cardRestaurant.shipping},00</Typography>
                        <Typography variant="body2" color="secondary">{cardRestaurant.address}</Typography>
                    </CardContent>
                </CardRestaurant>
            }
            {renderProducts}
        </MainDiv>
    )
};

export default Restaurant;