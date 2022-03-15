import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router";
import { baseURL } from "../../constants/baseurl";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";
import { BodyContainer } from "../Feed/styled-feed";

const Restaurant = () => {
    const params = useParams();
    const [restaurantDetails] = useRequestData([], `${baseURL}/restaurants/${params.id}`);

    console.log(restaurantDetails.restaurant)

    const cardRestaurant = restaurantDetails.restaurant

    const renderProducts = cardRestaurant && cardRestaurant.products.map((product) => {
        return (
            <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>R${product.price},00</p>
            </div>
        )
    })

    return (
        <div>
            <h2>Restaurante</h2>
            {cardRestaurant &&

                <Card>
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
                </Card>
            }
            {renderProducts}
        </div>
    )
};

export default Restaurant;