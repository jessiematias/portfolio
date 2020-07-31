import styled from "styled-components";
import { colors } from "../../../global";

export const Name = styled.h2`
color: ${colors.red};
font-family: 'menloregular';
font-size: 7rem;
margin: auto 2rem;
font-style: italic;
position: relative;

@media only screen and (max-width: 800px) {
    font-size: 3.5rem;
    margin-top: 3rem;
} 
`
export const NameSubtitle = styled.p`
color: ${colors.grey};
font-family: 'menloregular';
position: absolute;
font-size: 1.8rem;
font-weight: 400;
font-style: normal;
top: 85%;
left: 0;

@media only screen and (max-width: 1100px) {
    margin-top: 1.5rem;
}

@media only screen and (max-width: 800px) {
    font-size: 1.4rem;
    position: inherit;
    margin: 2rem;
} 
@media only screen and (max-width: 700px) {
    font-size: 1.2rem;
    position: inherit;
    margin: 2rem;
} 
` 

