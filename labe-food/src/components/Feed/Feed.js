import { Button, CardContent, CardMedia, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { ButtonNoStyle } from "../../pages/Home/styled-home";
import { CardStyled, DivStyled, BodyContainer, FilterContainer, SelectStyled } from "./styled-feed";
import SearchIcon from '@mui/icons-material/Search';
import { goToDetails } from "../../routes/coordinator";
import { useNavigate } from "react-router";
import { RestaurantSharp } from "@mui/icons-material";
import { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { baseURL } from "../../constants/baseurl";

const Feed = ({ isSearch }) => {
    const navigate = useNavigate();
    const { restaurants, getRestaurants , isLoading, error } = useContext(GlobalStateContext);
    const [inputValue, setValue] = useState("")
    const [categoryValue, setCategoryValue] = useState("")
    
    
    useEffect (()=> {
        getRestaurants()
    
       }, [])
 

    const filterCategory = (event) => {
        setCategoryValue(event.target.value)
    }

    const onChangeValue = (event) => {
        setValue(event.target.value)
    }

    console.log(restaurants.restaurants)
    const renderRestaurants = restaurants.restaurants && restaurants.restaurants.filter(restaurantes => {
        if (isSearch)
            if (!inputValue) {
                return false
            }
        return restaurantes.name.toLowerCase().includes(inputValue.toLowerCase())

    }).filter((restaurant) => {
        return restaurant.category.toLowerCase().includes(categoryValue.toLowerCase())
    })
        .map((restaurant) => {
            return (
                <div key={restaurant.id}>
                    <ButtonNoStyle onClick={() => { goToDetails(navigate, restaurant.id) }}>
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

    console.log(categoryValue)

    return (
        <DivStyled>

            {isSearch ? <TextField
                id="input-with-icon-textfield"
                placeholder="Restaurante..."
                onChange={onChangeValue}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            /> : <></>}
            <FilterContainer>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Filtrar</InputLabel>
                    <SelectStyled
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={categoryValue}
                        onChange={filterCategory}
                        autoWidth
                        label="Filtrar"
                    >
                        <MenuItem value="">
                            <em>Categoria</em>
                        </MenuItem>
                        <MenuItem value={"árabe"}>Árabe</MenuItem>
                        <MenuItem value={"sorvetes"}>Sorvete</MenuItem>
                        <MenuItem value={"carnes"}>Carnes</MenuItem>
                        <MenuItem value={"petiscos"}>Petiscos</MenuItem>
                        <MenuItem value={"asiática"}>Asiática</MenuItem>
                        <MenuItem value={"hamburguer"}>Hamburguer</MenuItem>
                        <MenuItem value={"italiana"}>Italiana</MenuItem>
                        <MenuItem value={"baiana"}>Baiana</MenuItem>
                        <MenuItem value={"mexicana"}>Mexicana</MenuItem>
                    </SelectStyled>
                </FormControl>
            </FilterContainer>
            {renderRestaurants}
            {!isLoading && error && <p>Deu um erro. Tente novamente.</p>}
        </DivStyled>
    )
};

export default Feed;