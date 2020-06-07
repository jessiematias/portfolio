import React from 'react';
import { Gridcontainer, LogoContainer, LogoImg } from './NavbarStyles';
import NavItemsContainer from '../NavItemsContainer/NavItemsContainer';

const Navbar = () => (
  <>
<Gridcontainer>
 <LogoContainer><LogoImg/></LogoContainer>
  <div/>
<NavItemsContainer />
</Gridcontainer>
</>
)

export default Navbar