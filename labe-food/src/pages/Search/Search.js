<<<<<<< HEAD
import { baseURL } from "../../constants/baseurl";
import useRequestData from "../../hooks/useRequestData";
import { useState } from "react";
import {SearchIconStyled} from './styled-search'
import Feed from "../../components/Feed/Feed";
=======
import Feed from "../../components/Feed/Feed";

>>>>>>> 7040ecba44342ecaac83d598668085e07264cb01
const Search = () => {

    return (
        <div>
            <Feed
                isSearch="true"
            />
        </div>
    )
};

export default Search;