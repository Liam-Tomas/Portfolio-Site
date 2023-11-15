// Footer.js
import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const FooterContainer = styled.footer`
    width: 100%;
    height:35px;
    background-color: transparent;
    color: ${props => props.theme.textGrey};
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    font-size: 14.5px;

    ${media.lessThan("medium")`
        font-size: .7rem;
    `};
`;

const Year = new Date().getFullYear();

const Footer = () => {
    return (
        <FooterContainer>
         Created and Designed by Liam Armstrong © {Year}
        </FooterContainer>
    );
}

export default Footer;
