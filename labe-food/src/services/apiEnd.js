import axios from "axios";
import { useContext } from "react";
import { baseURL } from "../constants/baseurl";
import { GlobalStateContext } from "../global/GlobalStateContext";



//dataUp is a function to take date back to who called.
export const PutAdress = (form , addressUrl  , dataUp, getUserData ) => {

  const url = `${baseURL}/${addressUrl}`;
//   console.log(form);
//   console.log(token);
  axios

    .put(
      url,
      form,
      // { headers: { auth: localStorage.getItem("token") } }
      { headers: { auth: localStorage.getItem("token") } }
    )
    .then((res) => {
      dataUp(res) 
      console.log(res)})
    .catch((err) => console.log(err.response));
};
