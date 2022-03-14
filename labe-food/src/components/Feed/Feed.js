import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { baseURL } from "../../constants/baseurl";
import useRequestData from "../../hooks/useRequestData";
import { ButtonNoStyle } from "../../pages/Home/styled-home";
import { CardStyled, DivStyled, BodyContainer } from "./styled-feed";

const Feed = () => {
    const [restaurants, getRestaurants, isLoading, error] = useRequestData([], `${baseURL}/restaurants`)

    console.log(restaurants);

    const renderRestaurants = restaurants && restaurants.map((restaurant) => {
        console.log(restaurant.name)
        return (
            <div>
                <ButtonNoStyle>
                    <CardStyled>

                        <CardMedia
                            component="img"
                            // sx={{ maxWidth: 450}}
                            height="150"
                            image={restaurant.logoUrl}
                            alt="Foto do Restaurante"
                        />
                        <CardContent>
                            <Typography variant="body" component="div" color="primary">
                                {restaurant.name}
                            </Typography>
                            <BodyContainer>
                                <Typography variant="body2" color="secondary">Tempo de entrega: {restaurant.deliveryTime} min</Typography>
                                <Typography variant="body2" color="secondary">Frete: R${restaurant.shipping},00</Typography>
                            </BodyContainer>
                        </CardContent>
                    </CardStyled>
                </ButtonNoStyle>
            </div>
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