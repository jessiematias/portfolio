import styled from 'styled-components'
import  Logo  from './../../logo.svg'

export const Gridcontainer = styled.div`
display: grid;
height: 5.3rem;
grid-template-columns: 30% 30% 40%;
align-items: center;
font-size: 1.5rem;
`
export const LogoContainer = styled.div`
width: 100%;
`
export const LogoImg = styled.div`
background-image: url(${Logo});
background-repeat: no-repeat;
height: 6rem;
position: absolute;
left: 3rem;
right: 90%;
top: 1rem;
`
