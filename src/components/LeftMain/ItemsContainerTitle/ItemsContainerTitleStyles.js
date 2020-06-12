import styled from "styled-components";
import { colors } from "../../../global";

export const ItemsContainerDiv = styled.div`
padding: 0 3rem;
margin: 0 3rem;
display: flex;
justify-content: space-between;
font-family: 'menloregular';
color: ${colors.grey};
font-size: 1.6rem;
font-weight: 700;
height: fit-content;
padding-bottom: 1rem;
border-bottom: 1px solid ${colors.grey}; 

@media only screen and (max-width: 600px) {
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
} 
`