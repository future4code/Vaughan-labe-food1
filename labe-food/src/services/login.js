import axios from "axios";
import { baseURL } from "../constants/baseurl";

export const LoginData = (body, dataUp) => {
  // const url= `${baseURL}/login`;
  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/login";
  const { email, password } = body;

  axios
    .post(url, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);

      dataUp(res.data);
    })
    .catch((err) => {
      console.log(err.response);
      alert(err.response.data.message);
    });
};
