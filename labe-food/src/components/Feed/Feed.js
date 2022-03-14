import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { baseURL } from "../../constants/baseurl";
import useRequestData from "../../hooks/useRequestData";
import { CardStyled } from "./styled-feed";

const Feed = () => {
    const [restaurants, getRestaurants, isLoading, error] = useRequestData([], `${baseURL}/restaurants`)
    
    console.log(restaurants);

    const renderRestaurants = restaurants && restaurants.map((restaurant) => {
        console.log(restaurant.name)
        return (
            <CardStyled>
                <CardMedia
                component="img"
                width="10" 
                image={restaurant.logoUrl}
                alt="Foto do Restaurante"
                />
                <CardContent>
                <Typography variant="h5" component="div">
                    {restaurant.name}
                    </Typography>
                <Typography variant="body2">Tempo de entrega: {restaurant.deliveryTime} min</Typography>
                <Typography variant="body2">Frete: R${restaurant.shipping},00</Typography>
                </CardContent>
            </CardStyled>
        )
    })
    return (
        <div>
            {renderRestaurants}
            {!isLoading && error && <p>Deu um erro. Tente novamente.</p>}
        </div>
    )
};

export default Feed;