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
`

export const TextFieldStyled = styled(TextField)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`