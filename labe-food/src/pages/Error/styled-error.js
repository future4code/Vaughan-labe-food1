import styled from "styled-components";
import { lipstick } from "../../constants/colors";

export const MainStyled = styled.div`
  height: 100vh;
  width: 100%;
  background: ${lipstick};

  div {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    /* padding: 18rem auto; */
  }

  img {
    margin: 3rem auto;
    width: 8.075rem;
    height: 5.063rem;
    object-fit: contain;
  
  }
  
`;