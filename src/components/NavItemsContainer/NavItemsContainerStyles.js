import styled from "styled-components";
import { colors } from "../../global";
import { NavLink } from "react-router-dom";

const activeClassName = 'nav-item-active'

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    border-bottom: 2px solid ${colors.red};
    outline: 0;
    @media only screen and (max-width: 600px) {
    border-bottom: none;
    opacity: .5;
     } 
  }
`

export const NavItem = styled.div`
    color: ${colors.grey};
    outline: 0;
    display: inline-block;
   
    &:hover {
        cursor: pointer;
    }   

    &:active {
      outline: 0;
    } 
    &:focus {
      outline: 0;
    }

    @media only screen and (max-width: 600px) {
    color: #fff;
    margin-bottom: 3rem;
    font-family: 'menloregular';
} 
`

export const ItemsContainer = styled.div`
display: flex;
justify-content: space-around;
font-family: 'menloregular';
@media only screen and (max-width: 600px) {
    display: none;
} 
`