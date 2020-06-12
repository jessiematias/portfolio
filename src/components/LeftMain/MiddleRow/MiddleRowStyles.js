import styled from "styled-components";
import { colors } from "../../../global";

export const MiddleParagraph = styled.p`
font-family: 'menloregular';
color: ${colors.grey};
font-size: 1.4rem;
margin: 0 auto 0 2rem;

@media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    margin: 3rem auto;
} 
`
export const ItemsCount = styled.span`
border: .5px solid ${colors.grey};
border-radius: 60%;
padding: 0 5px;
color: ${colors.red};

@media only screen and (max-width: 600px) {
    font-size: 1.2rem;
} 
`