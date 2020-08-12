import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu'
import { StyledLink, NavItem } from '../NavItemsContainer/NavItemsContainerStyles';

class Hamburger extends Component {
    state = {
        menuOpen: false,
        HamburgerVisibility: null,
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    updateDimensions = () => {
        if (window.innerWidth > 600) {
            this.setState({ HamburgerVisibility: true })
        } else {
            this.setState({ HamburgerVisibility: false })
        }
    }

    componentDidMount() {
        this.updateDimensions()
        window.addEventListener("resize", this.updateDimensions)
    }

    render(props) {

        const styles = {
            bmBurgerButton: {
                visibility: this.state.HamburgerVisibility ? "hidden" : "visible",
                position: 'fixed',
                width: '30px',
                height: '24px',
                right: '20px',
                top: '1.4rem'
            },
            bmBurgerBars: {
                background: '#212121'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: '#fff'
            },
            bmMenuWrap: {
                position: 'fixed',
                height: '100%'
            },
            bmMenu: {
                background: '#212121',
                padding: '2.5em 1.5em 0',
                fontSize: '2rem',
                textAlign: 'center',
                width: '100%',
            },
            bmItemList: {
                padding: '4rem 2rem'
            },
            bmItem: {
                display: 'block'
            }
        }

        return (
            <Menu
                right
                disableAutoFocus
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                width={' 200px'}
                styles={styles}
            >
                <StyledLink exact to="/">
                    <NavItem onClick={() => this.closeMenu()}>
                        HOME
           </NavItem>
                </StyledLink>

                <StyledLink to="/about">
                    <NavItem onClick={() => this.closeMenu()}>
                        ABOUT
           </NavItem>
                </StyledLink>

                <StyledLink to="/contact">
                    <NavItem onClick={() => this.closeMenu()}>
                        CONTACT
           </NavItem>
                </StyledLink>
            </Menu>
        )
    }
}

export default Hamburger