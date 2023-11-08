import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

// const SpotlightStyled = styled.div`
//   position: fixed;
//   border-radius: 50%;
//   width: 950px; 
//   height: 950px;
//   pointer-events: none;
//   background: radial-gradient(
//     circle, 
//     rgba(69,130,247, 0.48) 0%,
//     rgba(69,130,247, 0.48) 3%, 
//     rgba(69,130,246, 0.48) 6%,
//     rgba(69,130,246, 0.47) 9%, 
//     rgba(69,130,246, 0.47) 12%, 
//     rgba(69,130,246, 0.46) 15%, 
//     rgba(69,130,246, 0.44) 18%, 
//     rgba(69,130,246, 0.42) 21%, 
//     rgba(69,130,246, 0.40) 24%, 
//     rgba(69,130,246, 0.38) 27%, 
//     rgba(69,130,246, 0.35) 30%, 
//     rgba(69,130,246, 0.31) 33%, 
//     rgba(69,130,246, 0.25) 36%, 
//     rgba(69,130,246, 0.22) 39%, 
//     rgba(69,130,246, 0.17) 42%, 
//     rgba(69,130,246, 0.13) 45%, 
//     rgba(69,130,246, 0.1) 48%, 
//     rgba(69,130,246, 0.05) 51%, 
//     rgba(69,130,246, 0.03) 53%,
//     rgba(69,130,246, 0.01) 55%, 
//     transparent 56%
//   ); 
//   transform: translate(-50%, -50%);
//   transition: left 0.02s, top 0.02s;
//   mix-blend-mode: overlay;
//   z-index: 500;
// `;

const SpotlightStyled = styled.div`
  position: fixed;
  border-radius: 50%;
  width: 1250px; 
  height: 1250px;
  pointer-events: none;
  background: radial-gradient(
    circle, 
    rgba(125,175,255, 0.42) 0%,
    rgba(125,175,255, 0.42) 3%, 
    rgba(124,175,255, 0.40) 6%,
    rgba(124,175,255, 0.40) 9%, 
    rgba(124,175,255, 0.39) 12%, 
    rgba(124,175,255, 0.39) 15%, 
    rgba(124,175,255, 0.38) 18%, 
    rgba(124,175,255, 0.37) 21%, 
    rgba(124,175,255, 0.34) 24%, 
    rgba(124,175,255, 0.31) 27%, 
    rgba(124,175,255, 0.28) 30%, 
    rgba(124,175,255, 0.24) 33%, 
    rgba(124,175,255, 0.18) 36%, 
    rgba(124,175,255, 0.17) 39%, 
    rgba(124,175,255, 0.15) 42%, 
    rgba(124,175,255, 0.11) 45%, 
    rgba(124,175,255, 0.07) 48%, 
    rgba(124,175,255, 0.05) 51%, 
    rgba(124,175,255, 0.03) 53%,
    rgba(124,175,255, 0.01) 55%, 
    transparent 56%
  ); 
  transform: translate(-50%, -50%);
  transition: left 0s, top 0s;
  mix-blend-mode: overlay;
  z-index: 100; 
`;


function Spotlight() {
    const theme = useContext(ThemeContext);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    let lastUpdateTime = Date.now();

    const handleMouseMove = (e) => {
        const now = Date.now();
        if (now - lastUpdateTime > 16) { // Roughly 60fps
            const x = e.clientX;
            const y = e.clientY;
            setMousePosition({ x, y });
            lastUpdateTime = now;
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [theme.name]);

    // If the theme is not dark, we don't need spotlight to render
    if (theme.name !== 'dark') {
        return;
    }
    const spotlightStyle = {
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`
    };

    return <SpotlightStyled style={spotlightStyle} />;
}

export default Spotlight;


