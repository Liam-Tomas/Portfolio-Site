// import React from 'react';
// import Toggle from "./Toggler";  // Import the Toggle component
// import styled from 'styled-components';

// const StyledNav = styled.nav`
//   padding: 1rem 4rem;
//   background-color: ${props => props.theme.background};
//   color: ${props => props.theme.text};
//   font-size:1.05rem;
//   font-weight:500;
// `;

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   // max-width: 95%; // Assuming the container's maximum width is 1200px like Tailwind's "mx-auto"
//   margin: 0 auto;

// `;

// const Logo = styled.h1`


// `;

// const NavList = styled.ul`
//   display: flex;
//   gap: 2rem; 
//   align-items: center;
// `;

// const NavListRes = styled.ul`
//   display: flex;
//   align-items: center;
//   border: 2px solid ${({ theme }) => theme.primary};
//   padding:7px 16px;
//   border-radius:5px;
//   color: ${props => props.theme.primary};

// `;

// const NavLink = styled.a`
//   &:hover {

// `;

// function NavBar({ theme, toggleTheme }) {
//   return (
//     <StyledNav>
//       <Container>
//         <Logo>       
//         <Toggle theme={theme} toggleTheme={toggleTheme} />
//         </Logo>
//         <NavList>
//           <li>
//             <NavLink href="#">Home</NavLink>
//           </li>
//           <li>
//             <NavLink href="#">About</NavLink>
//           </li>
//           <li>
//             <NavLink href="#">Contact</NavLink>
//           </li>
//           <li>
//             <NavListRes href="#">Resume</NavListRes>
//           </li>

//         </NavList>
//       </Container>
//     </StyledNav>
//   );
// }

// export default NavBar;



// import React, { useState } from 'react';

// function NavBar({ theme }) {
//     const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//     const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

//     const currentThemeClasses = theme === 'dark' 
//         ? { nav: 'dark:bg-gray-800', text: 'dark:text-white', button: 'dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600', hoverLink: 'dark:hover:bg-gray-700' }
//         : { nav: 'bg-gray-50', text: 'text-gray-900', button: 'text-gray-500 hover:bg-gray-100 focus:ring-gray-200', hoverLink: 'hover:bg-gray-100' };

//     return (
//         <nav className={`border-gray-200 ${currentThemeClasses.nav}`}>
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <a href="#" className="flex items-center">
//                     <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
//                     <span className={`self-center text-2xl font-semibold whitespace-nowrap ${currentThemeClasses.text}`}>Flowbite</span>
//                 </a>
//                 <button 
//                     onClick={handleNavCollapse}
//                     type="button"
//                     className={`inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm rounded-lg ${currentThemeClasses.button}`}
//                     aria-controls="navbar-hamburger"
//                     aria-expanded={!isNavCollapsed}
//                 >
//                     <span className="sr-only">Open main menu</span>
//                     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
//                     </svg>
//                 </button>

//                 {!isNavCollapsed && (
//                     <div className="w-full" id="navbar-hamburger">
//                         <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50">
//                             <li>
//                                 <a href="#" className={`block py-2 pl-3 pr-4 text-white bg-blue-700 rounded ${currentThemeClasses.hoverLink}`} aria-current="page">Home</a>
//                             </li>
//                             <li>
//                                 <a href="#" className={`block py-2 pl-3 pr-4 ${currentThemeClasses.text} ${currentThemeClasses.hoverLink}`}>Services</a>
//                             </li>
//                             <li>
//                                 <a href="#" className={`block py-2 pl-3 pr-4 ${currentThemeClasses.text} ${currentThemeClasses.hoverLink}`}>Pricing</a>
//                             </li>
//                             <li>
//                                 <a href="#" className={`block py-2 pl-3 pr-4 ${currentThemeClasses.text} ${currentThemeClasses.hoverLink}`}>Contact</a>
//                             </li>
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// }

// export default NavBar;

// import React, { useState } from 'react';

// function NavBar({ theme }) {
//     const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//     const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

//     const styles = {
//         backgroundColor: theme.background,
//         textColor: theme.text,
//         borderColor: theme.toggleBorder,
//         buttonColor: theme.primary
//     };

//     return (
//         <nav className={`bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b`} style={{ backgroundColor: styles.backgroundColor, borderColor: styles.borderColor }}>
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <button onClick={handleNavCollapse} type="button" className="text-gray-500 bg-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
//                     <span className="sr-only">Open main menu</span>
//                     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
//                     </svg>
//                 </button>
//                 <a href="https://flowbite.com/" className="flex items-center ml-4">
//                     <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
//                     <span className={`self-center text-2xl font-semibold whitespace-nowrap`} style={{ color: styles.textColor }}>Flowbite</span>
//                 </a>
//                 <div className="flex">
//                     <button type="button" className="text-white ml-3 px-4 py-2 rounded" style={{ backgroundColor: styles.buttonColor }}>Get started</button>
//                 </div>

//                 {/* Slide-out menu */}
//                 <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 transform ${isNavCollapsed ? '-translate-x-full' : 'translate-x-0'} transition-transform duration-300 z-10`}>
//                     <ul className="flex flex-col p-4 font-medium">
//                         <li>
//                             <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded" style={{ backgroundColor: styles.buttonColor }}>Home</a>
//                         </li>
//                         <li>
//                             <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">About</a>
//                         </li>
//                         <li>
//                             <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
//                         </li>
//                         <li>
//                             <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavBar;




import React, { useState, useEffect } from 'react';
import Toggle from "./Theme/Toggler";
import styled from 'styled-components';
import Button from './Button';
import ResumeModal from './Modals/ResumeModal';
import ResumeModal2 from './Modals/ResumeModal2';

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
  `;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.h1`

`;

const NavList = styled.ul`
  display: flex;
  gap: .8rem; 
  align-items: center;
  font-size:1rem;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.text}; // assuming this is your default text color
  transition: color 0.2s, transform 0.2s;
  padding:1rem;
  &:hover {
    color: ${props => props.theme.primary}; // Define hoverText in your theme
    transform: scale(1.05);
    cursor: pointer;
  }

  &.active {
    color: ${props => props.theme.primary}; // Define activeText in your theme
  }
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
