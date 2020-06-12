import React from 'react';
import { Gridcontainer, LogoContainer, LogoImg } from './NavbarStyles';
import NavItemsContainer from '../NavItemsContainer/NavItemsContainer';
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <>
<Gridcontainer>
 <LogoContainer>
 <NavLink exact to="/">
   <LogoImg/>
   </NavLink>
   </LogoContainer>
  <div/>
<NavItemsContainer />
</Gridcontainer>
</>
)

export default Navbar