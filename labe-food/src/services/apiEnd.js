import axios from "axios";
import { baseURL } from "../constants/baseurl";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklTVGc4ZUZBTVhBM1NXZ2NxaWxaIiwibmFtZSI6ImdhYnJpZWwiLCJlbWFpbCI6ImdhYnJpZWwxM0BnYWJyaWVsLmNvbSIsImNwZiI6IjkxMS4xMTEuMTU0LTExIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY0NzI3OTk2MX0.-nDYfespw-YgrUCbFYi-DzKATeIQZGDQ2ndxyGuQqQw";

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklTVGc4ZUZBTVhBM1NXZ2NxaWxaIiwibmFtZSI6ImdhYnJpZWwiLCJlbWFpbCI6ImdhYnJpZWwxM0BnYWJyaWVsLmNvbSIsImNwZiI6IjkxMS4xMTEuMTU0LTExIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY0NzI3OTk2MX0.-nDYfespw-YgrUCbFYi-DzKATeIQZGDQ2ndxyGuQqQw"


// form that comes from a form - An Object with name and values
//dataUp is a function to take date back to who called.
export const PutAdress = (form , dataUp) => {
  const url = `${baseURL}/address`;
//   console.log(form);
//   console.log(token);
  axios

    .put(
      url,
      form,
      { headers: { auth: token } }
    )
    .then((res) => {
      dataUp(res) 
      console.log(res)})
    .catch((err) => console.log(err.response));
};
