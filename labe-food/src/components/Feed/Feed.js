import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { baseURL } from "../../constants/baseurl";
import useRequestData from "../../hooks/useRequestData";
import { CardStyled, DivStyled } from "./styled-feed";

const Feed = () => {
    const [restaurants, getRestaurants, isLoading, error] = useRequestData([], `${baseURL}/restaurants`)
    
    console.log(restaurants);

    const renderRestaurants = restaurants && restaurants.map((restaurant) => {
        console.log(restaurant.name)
        return (
            <CardStyled>
                <CardMedia
                component="img"
                // sx={{ maxWidth: 450}}
                height="150"
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
        <DivStyled>
            {renderRestaurants}
            {!isLoading && error && <p>Deu um erro. Tente novamente.</p>}
        </DivStyled>
    )
};

export default Feed;