import React, { useState, useEffect } from 'react';
import Toggle from "./Theme/Toggler";
import styled from 'styled-components';
import Button from './Button';
import ResumeModal from './Modals/ResumeModal';
import media from 'styled-media-query';
import { Link } from 'react-scroll';

const StyledNav = styled.nav`
  padding: 1.5rem 4rem;
  color: ${props => props.theme.text};
  position: fixed;
  width: 100%;  // Make sure the navbar spans the full width of the viewport
  font-weight:600;
  box-shadow: ${props => (props.shadow ? "0 4px 15px rgba(0, 0, 0, 0.3)" : "none")};
  background-color: ${props => props.theme.backgroundFaded};
  z-index:50;

  ${media.lessThan("medium")`
    padding: 2rem 1.8rem;
  `};

  `;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  ${media.lessThan("medium")`
  `};

`;

const Logo = styled.h1`

`;

const NavList = styled.ul`
  display: flex;
  gap: .8rem; 
  align-items: center;
  font-size:1rem;
  
  ${media.lessThan("medium")`
    gap: 0rem; 

  `};

`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.text}; 
  transition: color 0.2s, transform 0.2s;
  padding:1rem;
  &:hover {
    color: ${props => props.theme.primary}; 
    transform: scale(1.05);
    cursor: pointer;
  }

  &.active {
    color: ${props => props.theme.primary}; 
  }

  ${media.lessThan("medium")`
    padding:0rem;
    display: none;
  `};

`;


function NavBar({ theme, toggleTheme, setModalOpen }) {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [hasScrolled, setHasScrolled] = useState(false);

  const SCROLL_DELTA = 15;

  useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
  
        const scrollDifference = Math.abs(currentScrollPos - prevScrollPos);
  
        if (scrollDifference < SCROLL_DELTA) {
          return;
        }
  
        const threshold = window.innerHeight / 0;
  
        const scrolledDown = currentScrollPos > prevScrollPos;
        const passedThreshold = currentScrollPos > threshold;
  
        const shouldShowNavbar = !scrolledDown || currentScrollPos <= 5;
        const shouldHideNavbar = scrolledDown && passedThreshold;
  
        if (shouldHideNavbar) {
          setVisible(false);
        } else if (shouldShowNavbar) {
          setVisible(true);
        }
  
        setHasScrolled(currentScrollPos > 15);
  
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, [prevScrollPos]);

  return (
    <StyledNav shadow={hasScrolled} style={{ top: visible ? '0' : '-95px', transition: 'top 0.3s ease-in-out' }}>
      <Container>
        <Logo>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </Logo>
        <NavList>
          <li>
            <StyledLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Work
            </StyledLink>
          </li>
          <li>
            <StyledLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Contact
            </StyledLink>
          </li>
          <li>
            {/* onClick handler is updated to use the prop */}
            <Button onClick={() => setModalOpen(true)}>Resume</Button>
          </li>
        </NavList>
      </Container>
    </StyledNav>
  );
}

export default NavBar;
