import React, { useState, useEffect, useRef } from 'react';
import Toggle from "./Theme/Toggler";
import styled from 'styled-components';
import Button from './Button';
import ResumeModal from './Modals/ResumeModal';
import media from 'styled-media-query';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
    justify-content: space-between;
  `};

`;

const Logo = styled.h1`
  ${media.lessThan("medium")`
    display: none; // Hide the Toggle in mobile view
  `};
`;

const NavList = styled.ul`
  display: flex;
  gap: .8rem; 
  align-items: center;
  font-size:1rem;
  
  ${media.lessThan("medium")`
    gap: 0rem; 
    display: none; 

  `};

`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.text}; 
  transition: color 0.2s, transform 0.2s;
  padding:1rem;
  &:hover {
    color: ${props => props.theme.primary}; 
    // transform: scale(1.05);
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

// Add a styled component for the hamburger menu
const HamburgerMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  ${media.lessThan("medium")`
    display: block;
  `};

  // Style your hamburger icon here
`;

const MobileNavModal = styled.div`
  display: none;
  position: fixed;
  right: 0;
  top: 0;
  width: 60%; // Adjust the width as needed
  height: 100%;
  background: ${props => props.theme.card};
  z-index: 60;
  transform: translateX(100%);
  transition: transform 0.2s ease-in-out;

  ${media.lessThan("medium")`
    display: block;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  `};
`;

const MobileNavStyledLink = styled(StyledLink)`
  display: block;
  padding: 2rem 1.5rem; // Increased padding
  font-size: 2rem; // Larger font size
  &:hover {
    color: ${props => props.theme.primary}; // Hover effect
    background-color: rgba(255, 255, 255, 0.1); // add a subtle background change on hover
  }
`;

const Overlay = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background
  z-index: 55; // Ensure it's below the modal but above other content
`;

const ModalHeader = styled.div`
  display:flex;
  justify-content:space-between;
  padding:1.5rem;
`;

function NavBar({ theme, toggleTheme, setModalOpen }) {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const SCROLL_DELTA = 15;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileNav = () => {
    setIsMenuOpen(false);
  };

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
        <HamburgerMenuIcon onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} fontSize={'2rem'} />
        </HamburgerMenuIcon>
        <Overlay show={isMenuOpen} onClick={() => setIsMenuOpen(false)} />

        <MobileNavModal isOpen={isMenuOpen}>
          <ModalHeader>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <Button onClick={() => { setModalOpen(true); closeMobileNav(); }}>Resume</Button>
          </ModalHeader>
          <div>
            <MobileNavStyledLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileNav}
            >
              Home
            </MobileNavStyledLink>
            <MobileNavStyledLink
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileNav}
            >
              Work
            </MobileNavStyledLink>
            <MobileNavStyledLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileNav}
            >
              Contact
            </MobileNavStyledLink>
          </div>
        </MobileNavModal>
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
    </StyledNav >
  );
}

export default NavBar;
