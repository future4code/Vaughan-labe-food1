import { GlobalStateContext } from './GlobalStateContext';
import React, {useState} from "react";
import useRequestData from '../hooks/useRequestData';
import { baseURL } from '../constants/baseurl';

const GlobalState = (props) => {
    const [restaurants, getRestaurants, isLoading, error] = useRequestData([], `${baseURL}/restaurants`);

    const data = {
        restaurants,
        getRestaurants,
        isLoading,
        error
    }
    
    return (
        <GlobalStateContext.Provider value={ data }>
            {props.children}
        </GlobalStateContext.Provider>
    )
};

export default GlobalState;