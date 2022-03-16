import React, { useEffect, useState } from "react";
import { baseURL } from "../../constants/baseurl";
import { useNavigate } from "react-router";
import { createRenderer } from "react-dom/test-utils";
import { goToAddress, goToEditProfile } from "../../routes/coordinator";
import axios from "axios";
import useRequestData from "../../hooks/useRequestData"
import { TrendingUpOutlined } from "@mui/icons-material";
import { DivPerfil, NewContainer, OrderHistory, PersonaInformation, Title } from "./styled-profile";
import { Container, AddressContainer, TextNew } from "./styled-profile";
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from "@mui/material";
import Header from "../../components/Header/Header";




const Profile = () => {
    const navigate = useNavigate()
   

    const [userData] = useRequestData([], `${baseURL}/profile`)
    // const [history] = useRequestData([], `${baseURL}/orders/history`)
    const history = [{ totalPrice: 21, name: "McDonald", date: "21 outubro 2021" }, { totalPrice: 21, name: "McDonald", date: 22 }]
    console.log(userData)
    console.log(history)
    const changeProfile = () => {
        goToEditProfile(navigate)

    }

    const changeAdress = () => {
        goToAddress(navigate)

    }

    // useEffect(() => {
    //     orders()
    // }, [])

    const orders = history && history.map((order) => {
        return (
            <> {order.name}
                {order.date}
                {order.totalPrice}
            </>

        )
    })


    return (
        <>
            <Header title="Meu Perfil"
                goBack={true}

            />
            <Container>
                <div>

                    <NewContainer>

                        {userData.user ?
                            <TextNew>
                                <p> {userData.user.name}</p>
                                <p>{userData.user.email}</p>
                                <p> {userData.user.cpf}</p>
                                <p>{orders}</p>
                            </TextNew>


                            : <p>carregando </p>}
                        <div>
                            <EditIcon onClick={changeProfile} />
                        </div>
                    </NewContainer>

                    <AddressContainer>
                        <div>
                            <Typography mb={0.5} color="secondary">
                                Endereço cadastrado
                            </Typography>
                            <Typography color="primary.textcontrast">
                                {userData.user && userData.user.address}
                            </Typography>

                        </div>
                        <div>
                            <EditIcon onClick={changeAdress} />
                        </div>
                    </AddressContainer>



                    {/* <OrderHistory>
    <p>Histórico de pedidos</p> */}
                </div>
                <OrderHistory>
                    <p>Histórico de pedidos</p>
                    {history.length > 0 ? orders : <p>Você não realizou nenhum pedido</p>}

                </OrderHistory>


            </Container>
        </>







    )

}
export default Profile;