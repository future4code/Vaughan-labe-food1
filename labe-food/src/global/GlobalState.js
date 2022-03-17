import { GlobalStateContext } from './GlobalStateContext';
import React, {useEffect, useState} from "react";
import useRequestData from '../hooks/useRequestData';
import { baseURL } from '../constants/baseurl';

const GlobalState = (props) => {
    const [restaurants, getRestaurants, isLoading, error] = useRequestData([], `${baseURL}/restaurants`);
    const [addressData, getDataAddress, isLoadingAddress, errorAddress] = useRequestData( "", `${baseURL}/profile/address`);
    const [userData , getUserData ,isLoadingUserData ] = useRequestData([], `${baseURL}/profile`);
    const [productsInCart, setProductsInCart] = useState([]);
    const [restaurantId, setRestaurantId] = useState();

    // const [addButton, setAddButton] = useState(productsInCart.map(product => product.quantity > 0) ? "Adicionar" : "Remover")
   const dataAdressDown = addressData


    const data = {
        restaurants,
        getRestaurants,
        isLoading,
        error,
        productsInCart,
        setProductsInCart,
        // addButton,
        // setAddButton, 
        addressData, 
        getDataAddress,
         isLoadingAddress, 
         errorAddress,
         dataAdressDown,
         userData,
         getUserData,
         isLoadingUserData,
         restaurantId, 
         setRestaurantId
    }
    
    return (
        <GlobalStateContext.Provider value={ data }>
            {props.children}
        </GlobalStateContext.Provider>
    )
};

export default GlobalState;