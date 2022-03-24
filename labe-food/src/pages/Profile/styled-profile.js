import { Card, Typography } from "@mui/material"
import styled from "styled-components"

export const MainDiv = styled.div`
    margin-bottom: 12vh;
`

export const DivPerfil = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`

export const AddressContainer = styled.div`
    background-color: #eeeeee;
    min-height: 4.75rem;
       padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const OrderHistory = styled.div`
    padding: 0 1rem 0 1rem;
    padding-bottom: 5rem;
    .division-orders {
        background-color: black;
        height: 1px;
    }
    .noRequests{
        text-align: center;
    }
`

export const NewContainer = styled.div`
    min-height: 4.75rem;
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `
export const Title = styled.div`
    width: 4.25rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);

`
export const TypographyStyled = styled(Typography)`
    font-weight: bold !important;
    margin: 5px  !important ;
`

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TextUltimate = styled.p`
    margin: 5px;
    margin-bottom: 20px;
    padding: 5px;
    border-bottom: 1px solid black;
    width: 95vw;
`
export const  CardStyled = styled(Card)`
    width: 95vw;
    border-radius: .5em !important ;
    border: 1px solid greyish !important;
    margin-bottom: 10px;
`
export const TypographyMargin = styled(Typography)`
    margin: 5px  !important ;
`
export const TextNew = styled.div`
    width: 22.5rem;
    display: flex;
    flex-direction: column;
    p{
      margin: 5px;
    }
`

export const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    .address{
        background-color: black
    }
    .tituloCenter{
        text-align: center;
    }
`

export const StyledHistory = styled.div`
    width: 20.5rem;
    height: 6.375rem;
    margin: 0.438rem 0 0;
    padding: 1rem;
    border-radius: 8px;
    border: solid 1px var(--greyish);
`