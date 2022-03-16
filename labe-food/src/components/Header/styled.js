import styled from 'styled-components';

export const  StyledBox = styled.div`
display: flex;
justify-content: space-between;

`

export const  StyledToolbar = styled.div`
height: 4rem;
display: flex;
padding-left:1rem;
justify-content:space-between;
align-items:center;
width: 56%; 

@media(max-width:380px){ 
    width: 60%; 
}

`

export const  StyledTitle = styled.div`
height: 4rem;
display: flex;
padding-left:1rem;
justify-content: center;
align-items:center;
/* width: 58%;  */

`
export const  StyledSubBox = styled.div`
margin-top: 1.75rem;
font-size: 1rem;
font-weight:normal;
letter-spacing: -0.39px;
display: flex;
align-items: center; 
justify-content:  center;
`