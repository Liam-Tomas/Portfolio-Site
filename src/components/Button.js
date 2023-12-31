import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import media from 'styled-media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import customMedia from './breakpoint'

const StyledButton = styled.button`
  position: relative; 
  padding: ${props => props.customPadding || '9px 17px'};
  font-size: ${props => props.fontSize || ".9rem"};
  background: ${props => props.variant === "contained" ? (props.theme.btnColor || props.btnColor || props.theme.primary) : "transparent"};
  color: ${props => props.variant === "contained" ? "#fff" : (props.theme.btnColor || props.btnColor || props.theme.primary)};
  border-radius: ${props => props.borderRadius || "5px" };
  font-weight: 700;
  border: 1px solid ${props => props.variant === "contained" ? "transparent" : (props.theme.btnColor || props.btnColor || props.theme.primary)};
  cursor: pointer;
  overflow: hidden; 
  transition: transform 0.1s ease, background-color 0.1s ease, opacity 0.1s ease;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  text-transform: uppercase;
  // Hover effect for the contained variant
  &:hover {
    ${props => props.variant === "contained" && `
      filter: brightness(110%);
    `}
    ${props => props.variant !== "contained" && `
      background-color: ${props.theme.primaryFaded};
    `}
  }

  &:active {
    transform: scale(0.97);
  }

  // ${customMedia.greaterThan('extraLarge')`
  //   font-size: 1.1em;
  // `};

`;

function Button({ children, icon, onClick, btnColor, variant, href, fontSize, customPadding, borderRadius }) {
  const theme = useContext(ThemeContext);

  // If no variant prop is provided, determine the variant based on the theme.
  const derivedVariant = variant || (theme.name === 'light' ? 'contained' : 'outlined');

  const buttonContent = (
    <StyledButton
      onClick={onClick}
      btnColor={btnColor}
      variant={derivedVariant}
      fontSize={fontSize}
      customPadding={customPadding}
      borderRadius={borderRadius}
      >
      {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: '10px' }} />}
      {children}
    </StyledButton>
  );

  // If href prop is provided, wrap the button in an anchor tag
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}

export default Button;