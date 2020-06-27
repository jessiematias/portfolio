import styled from "styled-components";
import { colors } from "../../global";

export const AboutTitle = styled.h2`
font-family: 'menloregular';
font-size: 5rem;
color: ${colors.grey};
margin-bottom: 2rem;
font-weight: 400;
@media only screen and (max-width: 600px) {
    font-size: 2rem;
} 
` 

export const SkillsContainer = styled.div`
font-family: 'menloregular';
margin: auto 2rem;

li {
    font-size: 1.4rem;
    border: 1px solid ${colors.grey};
    border-radius: 5px;
    list-style: none;
    width: max-content;
    padding: 1px 5px;
    display: inline-block;
    margin: 5px;
}

@media only screen and (max-width: 375px) {
   li {
       font-size: 1.2rem;
   }
} 

`

export const AboutParagraph = styled.div`
font-family: 'menloregular';
font-size: 1.3rem;
margin-top: 5rem;
text-align: center;

div {
    margin-top: 2rem;
}

a {
    color: ${colors.red};
}

@media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    margin-top: 1rem; 
    text-align: left;
} 
`

export const AboutGrid = styled.div`
display: grid;
grid-gap: 10rem;
grid-template-columns: 50% 50%;
margin: 0 4.5rem;
height: 80vh;
@media only screen and (max-width: 700px) {
    grid-template-columns: none;
    grid-gap: 0;
    grid-template-rows: 60% 50%;
} 

@media only screen and (max-width: 340px) {
    grid-template-columns: none;
    grid-gap: 0;
    grid-template-rows: 80% 50%;
} 

`
export const AboutContainer = styled.div`
margin: auto 2rem; 
`