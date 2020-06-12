import styled from "styled-components";
import { colors } from "../../../global";

export const AccordionItemTitle = styled.div`
    cursor: pointer;
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    margin: 1rem 3rem;
    p {
        align-items: center;
        display: flex;
        span {
            margin-right: 1rem;
        }
    }

    @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
    margin: 1rem 0;
} 
`

export const Links = styled.div`
margin: 1rem auto;
a {
    color: ${colors.red};
    margin-right: 5rem;
    cursor: pointer;
    font-weight: 600;
    @media only screen and (max-width: 600px) {
    margin: 0 1em 0 1rem;
} 
}
`

export const CollapsableContent = styled.div`
text-align: center;
font-size: 1.4rem;
opacity: ${props => (props.open ? "1" : "0")};
max-height: ${props => (props.open ? "20rem" : "0")};
padding: ${props => (props.open ? "15px" : "0 15px")};
overflow: hidden;
transition: all .2s ease-out;
@media only screen and (max-width: 600px) {
    font-size: 1.2rem;
} 
`

export const AccordionContainerStyled = styled.div`
border-bottom: 1px dashed ${colors.grey};
margin: 0 3rem;
font-family: 'Times New Roman';
color: ${colors.grey};
@media only screen and (max-width: 600px) {
    margin: 0;
} 
`