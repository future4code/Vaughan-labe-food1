import { GlobalStateContext } from './GlobalStateContext';
import React, {useEffect, useState} from "react";
import useRequestData from '../hooks/useRequestData';
import { baseURL } from '../constants/baseurl';

const GlobalState = (props) => {
    const [restaurants, getRestaurants, isLoading, error] = useRequestData([], `${baseURL}/restaurants`);
    const [productsInCart, setProductsInCart] = useState([]);
    // const [addButton, setAddButton] = useState(productsInCart.map(product => product.quantity > 0) ? "Adicionar" : "Remover")

    const data = {
        restaurants,
        getRestaurants,
        isLoading,
        error,
        productsInCart,
        setProductsInCart,
        // addButton,
        // setAddButton
    }
    
    return (
        <GlobalStateContext.Provider value={ data }>
            {props.children}
        </GlobalStateContext.Provider>
    )
};

export default GlobalState;