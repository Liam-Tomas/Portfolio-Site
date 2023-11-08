import React from 'react';
import { func, string } from 'prop-types';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button'

const StyledButton = styled(Button)`
  `;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <StyledButton theme={theme} onClick={toggleTheme}>
      {theme === "light" ?
        <FontAwesomeIcon icon={faSun} /> :
        <FontAwesomeIcon icon={faMoon} />
      }
    </StyledButton>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
