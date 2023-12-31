// At the top of your React component file
import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // This is the theme
import 'prismjs/components/prism-jsx.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'; // Styles for line numbers
import 'prismjs/components/prism-python';
import media from 'styled-media-query';
import styled from 'styled-components';

const CodeEditorContainer = styled.div`
  background-color: ${props => props.theme.card};
  border-radius: 5px;
  padding: 10px;
  width:580px; 
  height: 420px; 
  overflow: hidden; 
  // text-align: left !important;
  position: relative;
  /* Add more styling as needed */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  ${media.lessThan("medium")`
    width: 100%;
    height: 250px; 
  `};

`;

const CodeHeader = styled.div`
  display: flex;
  justify-content: start;
  padding: 4px;
  padding-bottom: 12px;
  border-bottom: .5px solid ${props => props.theme.textGrey};

`;

const Dot = styled.span`
  height: 11px;
  width: 11px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;

  &.red {
    background-color: #ff605c;

  }
  &.yellow {
    background-color: #ffbd44;

  }
  &.green {
    background-color: #00ca4e;
  }
`;

const StyledPre = styled.pre`
  padding: 0 !important;
  padding-left: 25px !important;
  background-color: transparent !important;
  position: relative;
  margin: 0;
  height: 100%; // Set a fixed height
  overflow-y: auto; // Scrollbar will appear if content exceeds 400px
  &.line-numbers {
    counter-reset: linenumber;
  }
  
  &.line-numbers > code {
    position: relative;
    white-space: inherit;
    color: ${props => props.theme.textCode};

  }
  
  &.line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    color:red !important;
    font-size: 100%;
    left: -3em;
    width: em; /* Adjust the width of line numbers area */
    letter-spacing: -1px;
    border: 0;
  }
  &.line-numbers .line-numbers-rows span {
    color: red !important; // Replace 'red' with your desired color
  }
  /* Force the scrollbar to be visible */


`;




const StyledCode = styled.code`
  display: block;
  font-size:.7rem !important;
  text-align: left !important;
  padding-right: 35px !important;
  padding-left: 10px;
  white-space: pre-wrap;
  background-color: #0f172a !important;
  background-color: ${props => props.theme.card} !important;


  // background-color: #1e293b !important;
  .token.keyword, .token.constant, .token.symbol, .token.deleted {
    color: ${props => props.theme.tokenColor1}; /* Purple */
  }

  .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted {
    color: ${props => props.theme.tokenColor2}; /* Green */
  }
  
  .token.function {
    color: ${props => props.theme.tokenColor3}; /* Blue */
  }
  
  .token.comment, .token.prolog, .token.doctype, .token.cdata {
    color: ${props => props.theme.tokenColor4}; /* Grey */
  }
  
  .token.operator, .token.entity, .token.url, .token.variable {
    color: ${props => props.theme.tokenColor5}; /* Teal */
  }
  
  .token.number {
    color: ${props => props.theme.tokenColor6}; /* Orange */
  }

  .token.punctuation {
    color: ${props => props.theme.text} /* Replace with the color you want */
  }

  ${media.lessThan("medium")`
    font-size:.65rem !important;
  `};

  `;

  const CodeBlockPy = ({ code }) => {
    // When the component mounts, highlight the code
    React.useEffect(() => {
      Prism.highlightAll();
    }, []);
  
    return (
      <CodeEditorContainer>
        <CodeHeader>
          <Dot className="red" />
          <Dot className="yellow" />
          <Dot className="green" />
        </CodeHeader>
        <StyledPre className="line-numbers">
          <StyledCode className="language-python">
            {code}
          </StyledCode>
        </StyledPre>
      </CodeEditorContainer>
    );
  };
  
  
  export default CodeBlockPy;