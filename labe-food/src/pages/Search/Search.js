import { baseURL } from "../../constants/baseurl";
import useRequestData from "../../hooks/useRequestData";
import { useState } from "react";
import {SearchIconStyled} from './styled-search'
import Feed from "../../components/Feed/Feed";
<<<<<<< HEAD
import { goToDetails } from "../../routes/coordinator";
import { useNavigate, useParams } from "react-router";
=======
import Header from '../../components/Header/Header';

>>>>>>> fec1ffa0dcf45762eef0e917d23897c5e9023b49
const Search = () => {
    const navigate = useNavigate()
  

    return (
        <>
            <Header title="Busca"  />
        <div>
            <Feed
                isSearch="true"
                
                
            />
        </div>
        </>
    )
};

export default Search;