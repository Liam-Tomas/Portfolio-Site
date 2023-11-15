import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactModal from '../Modals/ContactModal'; // Import the ContactModal
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';
import media from 'styled-media-query';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  justify-content: center;
  // background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  max-width: 1020px;  // This will make sure the container doesn't expand beyond 1000px
  margin: 0 auto;     // Center the container
  padding: 0 70px;    // Adds padding to ensure content doesn't touch the edges on smaller screens
  gap: 19px;
  color: ${props => props.theme.textLight};
  z-index: 1000;

  ${media.lessThan("medium")`
      max-height: 100%;
      padding: 0 1.8rem; // Reduced padding on smaller screens
      `};

  ${media.greaterThan("large")`
  `};

`;

const HeaderTitle = styled.h2`
  font-size: 1.15em;
  font-weight: 500;
  // margin: 5px 0px;
  color: ${props => props.theme.primary};
  font-family: 'Roboto Mono', monospace;

  ${media.lessThan("medium")`
    font-size:1rem;
  `};
  
`

const MyName = styled.h1`
  font-size:3.9rem;
  line-height: 1;
  font-weight: 900;
  // letter-spacing: -1px;

  color: ${props => props.theme.text};
  ${media.lessThan("medium")`
    font-size:2.4rem;
  `};
`;

const SubTitle = styled.h2`
  font-size:3.9rem;
  line-height: .9;
  font-weight: 800;
  color: ${props => props.theme.textGrey};
  // letter-spacing: -1px;

  ${media.lessThan("medium")`
      font-size:2.4rem;
  `};
`;


const Description = styled.div`
  font-size: 1.15rem;
  font-weight: 400;
  color: ${props => props.theme.textGrey};
  font-family: 'Inter', sans-serif;

  ${media.lessThan("medium")`
    font-size:1rem;
  `};
`

const BoldText = styled.span`
  font-weight: 700; // This will make the text inside this component bold
`;

const ButtonContainer = styled.div`
  font-size: .9rem;

  margin-top:8px;
  & > a {  // Target the anchor tags directly inside the ButtonContainer
    margin-right: 10px;

    &:last-child {
        margin-right: 0; // to remove margin from the last button
    }
  }
`;

const StyledButton = styled.button`
  background-color: ${props => props.btnColor || props.theme.btn2};
`

function Home({ id }) {
  const theme = useTheme();
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <HomeContainer id={id}>
      <HeaderTitle>Hi, my name is</HeaderTitle>
      <MyName>Liam Armstrong</MyName>
      <SubTitle>Data & Web Enthusiast</SubTitle>
      <Description>
        In my Computer Science journey at Oregon State, I've developed a keen interest in both software engineering and data analysis. My goal?
        To craft innovative software and insightful data-driven narratives. Check out some of my work below!
      </Description>
      <ButtonContainer>
        <Button
          fontSize=".9rem"
          variant="contained"
          href="https://github.com/Liam-Tomas"
          icon={faGithub}>
          Github
        </Button>
        <Button
          fontSize=".9rem"
          variant="outlined"
          href="https://www.linkedin.com/in/liam-tomas-armstrong/"
          // btnColor={theme.btn2}
          icon={faLinkedin}
          style={{ backgroundColor: "#fff" }}>
          LinkedIn
        </Button>
        {/* <Button
          fontSize=".9rem"
          variant=""
          // btnColor={theme.btn3}  // using the theme color directly
          icon={faEnvelope}
          onClick={() => setContactModalOpen(true)} // Open the contact modal
        >
          Contact
        </Button> */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;



// Currently, I'm diving deep into Computer Science at Oregon State University, with a dual passion for
// software engineering and data analysis. My goal? Crafting scalable solutions and insightful data-driven narratives.
// As I approach the culmination of my second bachelor's degree, I'm eager to contribute to and grow in both these spheres,
// ensuring I deliver impactful digital experiences.