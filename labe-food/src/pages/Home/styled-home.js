import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

export const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ButtonNoStyle = styled.button`
    background: none;
    border: none;
`

export const SearchIconStyled = styled(SearchIcon)`
    position: absolute;
    margin-left: 10px;
`

export const TextFieldStyled = styled(TextField)`
    position: relative;
    padding-left: 10px !important;
`

export const Search = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
`