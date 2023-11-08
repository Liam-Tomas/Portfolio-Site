// Projects.js
import React from 'react';
import styled from 'styled-components';
import recipeIMG from '../../images/recipeappIMG.jpg';
import ecommerceIMG from '../../images/ecommerceIMG.jpg'
import spotifyIMG from '../../images/spotifyIMG.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import Button from '../Button'
import media from 'styled-media-query';
import { useTheme } from 'styled-components';
import JSCode from '../Code/RecipeCode'; // Adjust the import path as necessary
import EcommerceCode from '../Code/EcommerceCode';
import AlgoCode from '../Code/AlgoCode';

const ProjectsSection = styled.section`
    background-color: ${props => props.theme.background};
    z-index: 1000;

    `;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1150px;  // This will make sure the container doesn't expand beyond 1000px
    margin: 0 auto;     // This will center the container
    padding: 0 20px;    // This will add a little padding to ensure content doesn't touch the edges on smaller screens
    `;

const ProjectsHeading = styled.h1`
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 40px;
    color: ${props => props.theme.text};

`;

const ProjectsGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 90px;
`;

const ProjectCard = styled.div`
    padding: 20px 0px;
    // box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    position: relative; // Added to contain the pseudo-element within the card
    justify-content: center;
    &::after {
        content: ''; // Required for pseudo-elements
        display: block;
        height: 2px; // Height of the line
        background-color: ${props => props.theme.cardLight};
        width: 100%; // Line width is 100% of the ProjectCard
        position: absolute;
        bottom: -45px; // Move the line below the ProjectCard. Adjust this value as needed.
        left: 0; // Align to the left of the ProjectCard
    }
    &.last::after {
        display: none;
    }
    

    ${media.lessThan("medium")`
        flex-direction: column;
        align-content: center;
    `};
`;

const ProjectImage = styled.img`
    height: auto; // Height will adjust to maintain aspect ratio
    max-width: 400px; // Set a maximum height for all images
    object-fit: cover;
    object-position: center;  // This ensures the center of the image is always in the center of the container. Adjust as needed.
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    `;


const ProjectTitle = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    line-height:1.2;
    color: ${props => props.theme.text};
`;

const ProjectDescription = styled.p`
    font-size: 1.15rem;
    font-weight: 400;
    color: ${props => props.theme.textGrey};

    ${media.lessThan("medium")`
        width: 70%;    `};
    `;

const MainContent = styled.div`
    display:flex;
    gap:14px;
    justify-content:center;
    flex-direction: column;
    margin-left: 25px; // This creates a gap between the image and the main content.
`

const TechIcon = styled(FontAwesomeIcon)`
    font-size: 45px;   // Adjust the size as needed
    margin-right: 20px; // Spacing between icons
    margin-top: 5px;
    color: ${props => props.theme.primary};
    `;

const SeeMoreContainer = styled.div`
    display:flex;
    justify-content:center;
    `

const TechContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    `

const ReactIcon = styled.div`
    border: 1.5px solid #ab6800;
    border-radius: 25px;
    color: #fff;
    font-weight:500;
    background-color: ${props => props.theme.icon1Color};
    font-size: .65rem;
    padding: 3px 9px;
`

const JavascriptIcon = styled.div`
    border: 1.5px solid #94000d;
    border-radius: 25px;
    color: #fff;
    font-weight:500;
    background-color: ${props => props.theme.icon2Color};
    font-size: .65rem;
    padding: 3px 9px;
`

const ThirdIcon = styled.div`
    border: 1.5px solid #19a251;
    border-radius: 25px;
    color: #fff;
    font-weight:500;
    background-color: ${props => props.theme.icon3Color};
    font-size: .65rem;
    padding: 3px 9px;
`
const FourthIcon = styled.div`
    border: 1.5px solid #0059b2;
    border-radius: 25px;
    color: #fff;
    font-weight:500;
    background-color: ${props => props.theme.icon4Color};
    font-size: .65rem;
    padding: 3px 9px;
`
const FifthIcon = styled.div`
    border: 1.5px solid #3b4a59;
    border-radius: 25px;
    color: #fff;
    font-weight:500;
    background-color: ${props => props.theme.icon5Color};
    font-size: .65rem;
    padding: 3px 9px;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
    color: ${props => props.theme.primary};
    // margin-left: 20px;
    font-weight:500;
`

const Header = styled.div`
    display:flex;

`
const StyledButton = styled(Button)`
`

const Projects = ({ id }) => {
    const theme = useTheme()

    return (
        <ProjectsSection id={id}>
            <Container>
                <ProjectsHeading>My Work</ProjectsHeading>
                <ProjectsGrid>
                    {/* Replace this part with a map function? */}
                    <ProjectCard>
                        {/* <ProjectImage src={recipeIMG} alt="Project Name" /> */}
                        <JSCode />
                        <MainContent>
                            <Header>
                                <ProjectTitle>Recipe Finder App</ProjectTitle>
                                {/* <ButtonContainer>
                                    <a>Live Demo</a>
                                    <a>Github</a>
                                </ButtonContainer> */}
                            </Header>
                            <TechContainer>
                                <ReactIcon>React</ReactIcon>
                                <JavascriptIcon>Javascript</JavascriptIcon>
                                <ThirdIcon>Mongodb</ThirdIcon>
                                <FourthIcon>Node</FourthIcon>
                                <FifthIcon>Express</FifthIcon>
                            </TechContainer>
                            <ProjectDescription>
                                Developed a full-stack recipe platform with React.js and
                                Express.js, featuring MongoDB, Spoonacular API search, user favorites,
                                and authentication via Firebase. MUI and styled-components used for
                                responsive UI design.
                                {/* Designed and Implemented a web-based recipe platform w/ Express.js for backend operations
                                and React.js for UI. It employs MongoDB for data storage, with features like
                                recipe creation, user favorites, and recipe searching through the Spoonacular API. Firebase facilitates
                                user authentication, while styling and theming are achieved using MUI and styled-components. */}
                            </ProjectDescription>
                            <ButtonContainer>
                                <StyledButton
                                    customPadding="8px 15px" // Adjust padding values to your needs
                                    fontSize=".75rem"
                                    btnColor={theme.btn2}
                                >
                                    Live Demo
                                </StyledButton>
                                <StyledButton
                                    customPadding="8px 15px"  // Adjust padding values to your needs
                                    fontSize=".75rem"
                                >
                                    Github
                                </StyledButton>
                            </ButtonContainer>
                        </MainContent>
                    </ProjectCard>
                    <ProjectCard>
                        {/* <ProjectImage src={ecommerceIMG} alt="Project Name" /> */}
                        <EcommerceCode />
                        <MainContent>
                            <ProjectTitle>Ecommerce Analysis</ProjectTitle>
                            <TechContainer>
                                <ReactIcon>MySQL</ReactIcon>
                                <JavascriptIcon>Python</JavascriptIcon>
                                <ThirdIcon>Pandas</ThirdIcon>
                                <FourthIcon>Tableu</FourthIcon>
                                <FifthIcon>Excel</FifthIcon>
                            </TechContainer>
                            <ProjectDescription>
                                In-depth analysis of a dataset encompassing a year of sales from a UK-based online
                                retail company specializing in all-occasion gifts. My analysis delved into sales patterns,
                                customer behaviors, and inventory trends.
                            </ProjectDescription>
                            <ButtonContainer>
 
                                <Button fontSize=".75rem" customPadding="8px 15px" 
                                >Github</Button>
                            </ButtonContainer>
                        </MainContent>
                    </ProjectCard>
                    <ProjectCard className="last">
                        {/* <ProjectImage src={spotifyIMG} alt="Project Name" /> */}
                        <AlgoCode />
                        <MainContent>
                            <ProjectTitle>Data Structures Portfolio</ProjectTitle>
                            <TechContainer>
                                <ReactIcon>Python</ReactIcon>
                                <JavascriptIcon>Data Structures</JavascriptIcon>
                                <FifthIcon>Algorithms</FifthIcon>
                            </TechContainer>
                            <ProjectDescription>
                                Enhanced the Spotipy Python library's documentation by creating "authorization.rst" in the
                                /docs directory, which features clear explanations and practical examples of the Authorization
                                Code Flow and Client Credentials Flow.
                            </ProjectDescription>
                            {/* <div>
                                    <TechIcon icon={faJs} title="JavaScript" />
                                    <TechIcon icon={faPython} title="Python" />
                                    <TechIcon icon={faReact} title="React" />
                                    <TechIcon icon={faNodeJs} title="Node.js" />
                                </div> */}
                            <ButtonContainer>
                                <Button 
                                fontSize=".75rem" 
                                customPadding="8px 15px" 
                                >Github</Button>
                            </ButtonContainer>
                        </MainContent>
                    </ProjectCard>
                    <SeeMoreContainer>
                        <Button variant="">See More</Button>
                    </SeeMoreContainer>
                    {/* End of example card */}
                </ProjectsGrid>
            </Container>
        </ProjectsSection >
    );
};

export default Projects;
