import { CardContent, CardMedia, InputAdornment, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { ButtonNoStyle } from "../../pages/Home/styled-home";
import { CardStyled, DivStyled, BodyContainer } from "./styled-feed";
import SearchIcon from '@mui/icons-material/Search';

const Feed = ({ isSearch }) => {
    const { restaurants, isLoading, error } = useContext(GlobalStateContext);
    const [inputValue, setValue] = useState("")

    const onChangeValue = (event) => {
        setValue(event.target.value)
    }

    const renderRestaurants = restaurants && restaurants.filter(restaurantes => {
        if (isSearch)
            if (!inputValue) {
                return false
            }
        return restaurantes.name.toLowerCase().includes(inputValue.toLowerCase())

    })
        .map((restaurant) => {
            return (
                <div key={restaurant.id}>
                    <ButtonNoStyle>
                        <CardStyled>

                            <CardMedia
                                component="img"
                                height="150"
                                image={restaurant.logoUrl}
                                alt="Foto do Restaurante"
                            />
                            <CardContent>
                                <Typography variant="body" component="div" color="primary">
                                    {restaurant.name}
                                </Typography>
                                <BodyContainer>
                                    <Typography variant="body2" color="secondary">{restaurant.deliveryTime} min</Typography>
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

            {isSearch ? <TextField
                id="input-with-icon-textfield"
                placeholder="Restaurante..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            /> : <></>}
            {renderRestaurants}
            {!isLoading && error && <p>Deu um erro. Tente novamente.</p>}
        </DivStyled>
    )
};

export default Feed;