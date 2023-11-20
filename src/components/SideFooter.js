import styled from 'styled-components';
import media from 'styled-media-query';

const VerticalText = styled.div`
  writing-mode: vertical-rl;
  text-align: center;
  position: fixed;  
  bottom: 15%;  // Adjust this to move the text up or down. 5% places the text closer to the bottom.
  font-size: 14.5px; 
  font-weight: 400;
  color: ${props => props.theme.textGrey};
  font-family: 'Roboto Mono', monospace;
  &:after {
    content: "";
    display: block;
    height: calc(100vh - 1em);  
    border-left: 1px solid ${props => props.theme.textGrey}; 
    position: absolute;
    left: 50%;  // Places the line in the middle of the text
    top: 100%;  // Positions the line directly below the text, so it extends downwards
  }

  ${media.lessThan("large")`
    display: none;
  `};
`;

const LeftText = styled(VerticalText)`
  padding-bottom:15px;
  left: 55px;  // Adjust to place the text closer or farther from the left edge
`;

const RightText = styled(VerticalText)`
  padding-bottom:15px;
  right: 55px;  // Adjust to place the text closer or farther from the right edge
`;

function VerticalCopyright() {
    return (
        <>
            <LeftText>Created by Liam A. 2023 ©</LeftText>
            <RightText>ltarmstrong94@gmail.com</RightText>
        </>
    );
}

export default VerticalCopyright;
