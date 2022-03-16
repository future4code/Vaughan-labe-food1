import styled from "styled-components"
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

export const TextNew = styled.div`

  width: 22.5rem;
  height: 60px;
  display: flex;
  flex-direction: column;

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