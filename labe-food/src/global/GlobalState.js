import { GlobalStateContext } from './GlobalStateContext';
import React, {useState} from "react";
import useRequestData from '../hooks/useRequestData';
import { baseURL } from '../constants/baseurl';

const GlobalState = (props) => {
    const [restaurants, getRestaurants, isLoading, error] = useRequestData([], `${baseURL}/restaurants`);
    const [productsInCart, setProductsInCart] = useState([]);

    const data = {
        restaurants,
        getRestaurants,
        isLoading,
        error,
        productsInCart,
        setProductsInCart
    }
    
    return (
        <GlobalStateContext.Provider value={ data }>
            {props.children}
        </GlobalStateContext.Provider>
    )
};

export default GlobalState;