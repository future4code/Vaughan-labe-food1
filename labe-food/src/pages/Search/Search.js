import { baseURL } from "../../constants/baseurl";
import useRequestData from "../../hooks/useRequestData";
import { useState } from "react";
import {SearchIconStyled} from './styled-search'
import Feed from "../../components/Feed/Feed";
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