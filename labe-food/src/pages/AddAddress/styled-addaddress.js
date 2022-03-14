import * as React from 'react';
import Card from '@mui/material/Card';
import styled from 'styled-components'



export const StyledForm = styled.div`
margin: 10px;
display: flex;
flex-direction: column;
`


export  function BasicCard(props) {
  return (
    <Card 

    style={{display: "flex", flexDirection: "column" }}
 >
     {props.children}
    </Card>
  );
}

