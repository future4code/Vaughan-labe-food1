import { baseURL } from "../../constants/baseurl";
import useRequestData from "../../hooks/useRequestData";
import { useState } from "react";
import { SearchIconStyled } from './styled-search'
import Feed from "../../components/Feed/Feed";
import { goToDetails } from "../../routes/coordinator";
import { useNavigate, useParams } from "react-router";
import Header from "../../components/Header/Header"
import Navigation from "../../components/Navigation/Navigation";
const Search = () => {
    const navigate = useNavigate()


    return (
        <>
            <Header title="Busca" />
            <div>
                <Feed
                    isSearch="true"
                />
            </div>
            <Navigation/>
        </>
    )
};

export default Search;