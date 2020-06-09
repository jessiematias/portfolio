import React from 'react';
import { NavItem, ItemsContainer, StyledLink } from './NavItemsContainerStyles';

const NavItemsContainer = () => (
    <ItemsContainer>
        <StyledLink exact to="/">
            <NavItem>
                HOME
           </NavItem>
        </StyledLink>

        <StyledLink to="/about">
            <NavItem>
                ABOUT
    </NavItem>
        </StyledLink>

        <StyledLink to="/contact">
            <NavItem>
                CONTACT
    </NavItem>
        </StyledLink>

    </ItemsContainer>
)

export default NavItemsContainer