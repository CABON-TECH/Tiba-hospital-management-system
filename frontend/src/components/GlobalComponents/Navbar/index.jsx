//import Logo from 'assets/images/Logo.svg'
import { colors } from 'colors'
import Section from 'components/GlobalComponents/Section'
import { fonts } from 'fonts'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Button from 'components/GlobalComponents/Button'

const Nav = styled.nav`
    padding: 20px 0;
    background: ${colors.white};
    position: sticky;
    top: 0;
    z-index: 2;
`
const NavSection = styled(Section)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavLeft = styled.div``
const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    font-weight: ${fonts.regular};
    font-size: 20px;
`
const LinkContainer = styled.div`
    display: flex;
    gap: 20px;
`

const StyledNavLink = styled(NavLink)`
    color: ${colors.black};
`
const ButtonContainer = styled.div``



const Navbar = () => {
    return (
        <Nav>
            <NavSection>
                <NavLeft>
                    <Link to="/">
                        <h1>Tiba Hospital</h1>
                    </Link>
                </NavLeft>
                <NavRight>
                    <LinkContainer>
                        <StyledNavLink to="/" exact activeStyle={{ color: colors.primary }}>
                            Home
                        </StyledNavLink>
                       
                    </LinkContainer>
                    <ButtonContainer>
                        <Link to="/login_options">
                            <Button>
                                Get Started
                            </Button>
                        </Link>

                    </ButtonContainer>
                </NavRight>
            </NavSection>

        </Nav>
    )
}

export default Navbar
