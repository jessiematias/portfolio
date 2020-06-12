import styled from "styled-components";

export const LeftGrid = styled.div`
color: black;
display: grid;
grid-template-rows: 40% 10% 50%;
@media only screen and (max-width: 600px) {
    display: block;
} 
`   