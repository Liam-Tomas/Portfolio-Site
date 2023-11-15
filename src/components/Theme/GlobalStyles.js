import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
    html {
        font-size:16px;

    }
    body {
        font-family: 'Bitter', sans-serif;
        font-family: 'Inter', 'Montserrat', sans-serif;
        background: ${props => props.theme.background}; // This will set the body background color according to the theme
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: ; // Adjust this as needed
        font-size:16px;
    }

    html, body {
        height: 100%;
        background: ${props => props.theme.background}; 
    }
    
  `
