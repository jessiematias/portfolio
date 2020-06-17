import React from 'react';
import { NavItem, ItemsContainer, StyledLink } from './NavItemsContainerStyles';

const NavItemsContainer = () => (
    <ItemsContainer>
        <StyledLink exact to={process.env.PUBLIC_URL + '/'}>
            <NavItem>
                HOME
           </NavItem>
        </StyledLink>

        <StyledLink to={process.env.PUBLIC_URL + '/about'}>
            <NavItem>
                ABOUT
    </NavItem>
        </StyledLink>

        <StyledLink to={process.env.PUBLIC_URL + '/contact'}>
            <NavItem>
                CONTACT
    </NavItem>
        </StyledLink>

    </ItemsContainer>
)

export default NavItemsContainer