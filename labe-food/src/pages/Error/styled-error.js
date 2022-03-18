
import styled from "styled-components";
import { lipstick } from "../../constants/colors";

export const MainStyled = styled.div`
  height: 100vh;
  width: 100%;
  background: ${lipstick};

  div{ 
      display: flex;
    height: 100vh;
  width: 100%;
      padding:18rem auto;
  }

  img {
    margin: 18rem auto;
    width: 8.075rem;
    height: 5.063rem;
    object-fit: contain;
  }
`;
