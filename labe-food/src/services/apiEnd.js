import axios from "axios";
import { baseURL } from "../constants/baseurl";

// const token = localStorage.getItem("token")
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklTVGc4ZUZBTVhBM1NXZ2NxaWxaIiwibmFtZSI6ImdhYnJpZWwiLCJlbWFpbCI6ImdhYnJpZWwxM0BnYWJyaWVsLmNvbSIsImNwZiI6IjkxMS4xMTEuMTU0LTExIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY0NzI3OTk2MX0.-nDYfespw-YgrUCbFYi-DzKATeIQZGDQ2ndxyGuQqQw";

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklTVGc4ZUZBTVhBM1NXZ2NxaWxaIiwibmFtZSI6ImdhYnJpZWwiLCJlbWFpbCI6ImdhYnJpZWwxM0BnYWJyaWVsLmNvbSIsImNwZiI6IjkxMS4xMTEuMTU0LTExIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY0NzI3OTk2MX0.-nDYfespw-YgrUCbFYi-DzKATeIQZGDQ2ndxyGuQqQw"

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVveGZNWnJ3NnpvaFhPQnJjUTh0IiwibmFtZSI6ImFsb3VhbG91YWxvdSIsImVtYWlsIjoiYWxvdWFsb3VhbG91QGZ1dHVyZTQuY29tIiwiY3BmIjoiMTExLjExMS45MjMtMTciLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXplciwgMTg3LCA3NiAtIFZpbGEgTi4gQ29uY2Vpc3NhbmRyYSIsImlhdCI6MTY0NzI3ODg3M30.kmEYuhUSBrpLSe9Jqyf2f-6uQo27xpb3SZiK0TepNgs"
    
// form that comes from a form - An Object with name and values
//dataUp is a function to take date back to who called.
export const PutAdress = (form , addressUrl  , dataUp) => {
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
