import styled from "styled-components";
import { colors } from "../../global";

export const RightGrid = styled.div`
display: grid;
background-color: ${colors.red};
height: 100%;

@media only screen and (max-width: 1100px) {
    display: none;
} 
`