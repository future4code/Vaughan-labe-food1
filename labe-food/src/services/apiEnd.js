import axios from 'axios';

const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklTVGc4ZUZBTVhBM1NXZ2NxaWxaIiwibmFtZSI6ImdhYnJpZWwiLCJlbWFpbCI6ImdhYnJpZWwxM0BnYWJyaWVsLmNvbSIsImNwZiI6IjkxMS4xMTEuMTU0LTExIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY0NzI3OTk2MX0.-nDYfespw-YgrUCbFYi-DzKATeIQZGDQ2ndxyGuQqQw";


const url = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/address"



export const PutAdress =(form)=> { 
   console.log(form)
   console.log(token)
    axios

  

       .put
       (url,

       
        
        {header:{ 'Content-Type': 'application/json', auth : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklTVGc4ZUZBTVhBM1NXZ2NxaWxaIiwibmFtZSI6ImdhYnJpZWwiLCJlbWFpbCI6ImdhYnJpZWwxM0BnYWJyaWVsLmNvbSIsImNwZiI6IjkxMS4xMTEuMTU0LTExIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY0NzI3OTk2MX0.-nDYfespw-YgrUCbFYi-DzKATeIQZGDQ2ndxyGuQqQw"} }, 
       

        {
            "street": "R. Afoneso Braz",
            "number": "1e77",
            "neighbourhood": "Vila N. Conceição",
            "city": "São Paulo",
            "state": "SPe",
            "complement": "7e1"
        },
     
    )
       .then(res => console.log(res))
       .catch(err => console.log(err.response))

    
    }
   
