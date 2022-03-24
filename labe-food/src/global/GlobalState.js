import { GlobalStateContext } from "./GlobalStateContext";
import React, { useState } from "react";
import useRequestData from "../hooks/useRequestData";
import { baseURL } from "../constants/baseurl";

const GlobalState = (props) => {
  const [restaurants, getRestaurants, isLoading, error] = useRequestData(
    [],
    `${baseURL}/restaurants`
  );
  const [addressData, getDataAddress, isLoadingAddress, errorAddress] =
    useRequestData("", `${baseURL}/profile/address`);
  const [userData, getUserData, isLoadingUserData] = useRequestData(
    [],
    `${baseURL}/profile`
  );
  const [productsInCart, setProductsInCart] = useState([]);
  const [restaurantId, setRestaurantId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [activeOrder, getActiveOrder] = useRequestData(
    [],
    `${baseURL}/active-order`
  );

  const dataAdressDown = addressData;

  const data = {
    restaurants,
    getRestaurants,
    isLoading,
    error,
    productsInCart,
    setProductsInCart,
    addressData,
    getDataAddress,
    isLoadingAddress,
    errorAddress,
    dataAdressDown,
    userData,
    getUserData,
    isLoadingUserData,
    restaurantId,
    setRestaurantId,
    activeOrder,
    getActiveOrder,
    setCpf,
    cpf,
    setEmail,
    email,
    setName,
    name,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
