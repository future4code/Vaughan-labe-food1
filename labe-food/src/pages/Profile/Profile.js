import React, { useEffect, useState } from "react";
import { baseURL } from "../../constants/baseurl";
import { useNavigate } from "react-router";
import { createRenderer } from "react-dom/test-utils";
import { goToAddress, goToEditProfile } from "../../routes/coordinator";
import axios from "axios";
import useRequestData from "../../hooks/useRequestData"
import { TrendingUpOutlined } from "@mui/icons-material";
import { DivPerfil, PersonaInformation, Title } from "./styled-profile";
import { Container } from "./styled-profile";
import EditIcon from '@mui/icons-material/Edit';
import { TextNew, TextI } from "./styled-profile";


const Profile = () => {
    const navigate = useNavigate()
    // const [user, setUser] = useState({})
    const [ordersHistory, setOrdersHistory] = useState([])

    const [userData] = useRequestData([], `${baseURL}/profile`)
    // const [history] = useRequestData([], `${baseURL}/orders/history`)
    const history = [ {totalPrice :21, name: "McDonald", date:21  }, {totalPrice :21, name: "McDonald", date:22  }]
    console.log(userData)
    console.log(history)
    const changeProfile = () => {
        goToEditProfile(navigate)

    }

    const changeAdress = () => {
        goToAddress(navigate)

    }

    const orders = history && history.map((order) => {
       return(
       <>  {order.totalPrice} 
           {order.name}

       
       </>  

        )
    })


return (
   <Container>
       <Title>Meu perfil</Title>
    
    <div>
   {userData.user ?
  <TextNew>
    <p> {userData.user.name}</p>
     <p>{userData.user.email}</p>
    <p> {userData.user.cpf}</p>
    <p>{orders}</p>
     </TextNew>

: <p>carregando </p> }
    <div>
    <EditIcon onClick ={changeProfile}/>
    </div>

    <TextI>
    <p> Endereço cadastrado</p>
    <p>{userData.adress}</p>
    <EditIcon onClick ={changeAdress}/>
    </TextI>

    <p>Histórico de pedidos</p>
    </div>
    

</Container>
    

    
    
    


)

    }
export default Profile;