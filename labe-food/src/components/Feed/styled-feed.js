import { Card, Select } from "@mui/material";
import styled from "styled-components";

export const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`

export const CardStyled = styled(Card)`
    margin: 10px;
    width: 85vw;
    text-align: left;
`

export const BodyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SelectStyled = styled(Select)`
    width: 40vw;
`