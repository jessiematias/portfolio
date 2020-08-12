import styled from "styled-components";

export const MainGrid = styled.div`
display: grid;
grid-template-columns: 60% 40%;
margin: 0 4.5rem;
height: 90vh;
@media only screen and (max-width: 1100px) {
    display: block;
} 
`