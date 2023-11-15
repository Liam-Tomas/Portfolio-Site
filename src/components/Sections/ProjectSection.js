import React from 'react';
import styled from 'styled-components';
import Button from '../Button'
import media from 'styled-media-query';
import { useTheme } from 'styled-components';
import JSCode from '../Code/RecipeCode'; // Adjust the import path as necessary
import EcommerceCode from '../Code/EcommerceCode';
import AlgoCode from '../Code/AlgoCode';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectsSection = styled.section`
    background-color: ${props => props.theme.background};
    z-index: 1000;

    `;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1180px;  // This will make sure the container doesn't expand beyond 1000px
    margin: 0 auto;     // This will center the container
    padding: 0 30px;    // This will add a little padding to ensure content doesn't touch the edges on smaller screens
   
    ${media.lessThan("medium")`
    flex-direction: column;
    align-content: center;
    justify-content: center;
`};
    `;

const ProjectsHeading = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 70px;
    color: ${props => props.theme.text};
       
    ${media.lessThan("medium")`
        font-size: 2.3rem;
    `};

`;

const ProjectsGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 180px;
`;

const ProjectCard = styled.div`
    padding: 20px 0px;
    gap:60px;
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
        bottom: -90px; // Move the line below the ProjectCard. Adjust this value as needed.
        left: 0; // Align to the left of the ProjectCard
    }
    &.last::after {
        display: none;
    }

    ${media.lessThan("medium")`
        flex-direction: column;
        // align-content: center;
        // justify-content: center;

        `};
`;

const ProjectTitle = styled.h3`
    font-size: 2.4rem;
    font-weight: 600;
    line-height:1.2;
    color: ${props => props.theme.text};

    ${media.lessThan("medium")`
        font-size: 1.8rem;
    `};
`;

const ProjectDescription = styled.p`
    font-size: 1.15rem;
    font-weight: 400;
    color: ${props => props.theme.textGrey};
    
    ${media.lessThan("medium")`
        font-size: 1rem;
        padding: 0rem 0rem;
    `};
`;
    

const MainContent = styled.div`
    display:flex;
    gap:30px;
    flex-direction: column;
`

const SeeMoreContainer = styled.div`
    display:flex;
    justify-content:center;
    `

const TechContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    ${media.lessThan("medium")`
    `};
    `

const TechIcon = styled.div`
    border: 1px solid #ab6800;
    border: 1.5px solid ${props => props.theme.textGrey};
    border-radius: 25px;
    font-weight:500;
    background-color: ${props => props.theme.icon1Color};
    background-color: transparent;
    color: ${props => props.theme.text};
    font-size: .8rem;
    padding: 3px 9px;

    ${media.lessThan("medium")`
        font-size: .7rem;
        padding: 2px 7px;

    `};
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
    color: ${props => props.theme.primary};
    // margin-left: 20px;
    font-weight:500;

    ${media.lessThan("medium")`
    `};
`

const Header = styled.div`
    display:flex;

`
const ProjectHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
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
                        <MainContent>
                            <ProjectHeaderContainer>
                                <ProjectTitle>Recipe Finder CRUD App</ProjectTitle>
                                <TechContainer>
                                    <TechIcon>React</TechIcon>
                                    <TechIcon>Javascript</TechIcon>
                                    <TechIcon>Mongodb</TechIcon>
                                    <TechIcon>Node</TechIcon>
                                    <TechIcon>Express</TechIcon>
                                </TechContainer>
                            </ProjectHeaderContainer>
                            <ProjectDescription>
                                Designed and Implemented a web-based recipe platform w/ Express.js for backend operations
                                and React.js for UI. It employs MongoDB for data storage, with features like
                                recipe creation, user favorites, and recipe search through the Spoonacular API. Firebase facilitates
                                user authentication, while styling and theming are achieved using MUI and styled-components.
                            </ProjectDescription>
                            <ButtonContainer>
                                <StyledButton
                                    href="https://recipe-finder-foodhub.netlify.app/"
                                    customPadding="7px 22px"
                                    fontSize=".8rem"
                                    btnColor={theme.btn2}
                                    borderRadius='20px'

                                >
                                    Live
                                </StyledButton>
                                <StyledButton
                                    href="https://github.com/Liam-Tomas/Recipe-Finder-App"
                                    customPadding="7px 22px"
                                    fontSize=".8rem"
                                    borderRadius='20px'
                                    icon={faGithub}
                                >
                                    Github
                                </StyledButton>
                            </ButtonContainer>
                        </MainContent>
                        <JSCode />

                    </ProjectCard>
                    <ProjectCard>
                        <MainContent>
                            <ProjectHeaderContainer>
                                <ProjectTitle>Ecommerce Analysis</ProjectTitle>
                                <TechContainer>
                                    <TechIcon>MySQL</TechIcon>
                                    <TechIcon>Python</TechIcon>
                                    <TechIcon>Pandas</TechIcon>
                                    <TechIcon>Tableu</TechIcon>
                                    <TechIcon>Excel</TechIcon>
                                </TechContainer>
                            </ProjectHeaderContainer>
                            <ProjectDescription>
                                In-depth analysis of a dataset encompassing a year of sales from a UK-based online
                                retail company specializing in all-occasion gifts. My analysis delved into sales patterns,
                                customer behaviors, and inventory trends.
                            </ProjectDescription>
                            <ButtonContainer>
                                <Button
                                    href="https://github.com/Liam-Tomas/Ecommerce-Data-Analysis"
                                    fontSize=".8rem"
                                    customPadding="7px 22px"
                                    icon={faGithub}
                                    borderRadius='20px'
                                >Github</Button>
                            </ButtonContainer>
                        </MainContent>
                        <EcommerceCode />
                    </ProjectCard>

                    <ProjectCard className="last">
                        <MainContent>
                            <ProjectHeaderContainer>

                                <ProjectTitle>Data Structures Portfolio</ProjectTitle>
                                <TechContainer>
                                    <TechIcon>Python</TechIcon>
                                    <TechIcon>Data Structures</TechIcon>
                                    <TechIcon>Algorithms</TechIcon>
                                </TechContainer>
                            </ProjectHeaderContainer>

                            <ProjectDescription>
                                Studied and implemented a comprehensive set of data structures in Python as part of my computer science curriculum. This collection encompasses essential structures 
                                such as Linked Lists, Stacks, and HashMaps, highlighting my hands-on experience with core algorithms and practical data manipulation techniques.
                                {/* Enhanced the Spotipy Python library's documentation by creating "authorization.rst" in the
                                /docs directory, which features clear explanations and practical examples of the Authorization
                                Code Flow and Client Credentials Flow. */}
                            </ProjectDescription>
                            <ButtonContainer>
                                <Button
                                    href="https://github.com/Liam-Tomas/Data-Structures-Portfolio"
                                    fontSize=".75rem"
                                    customPadding="7px 22px"
                                    icon={faGithub}
                                    borderRadius='20px'
                                >Github</Button>
                            </ButtonContainer>
                        </MainContent>
                        <AlgoCode />
                    </ProjectCard>

                    <SeeMoreContainer>
                        <Button variant="">See More</Button>
                    </SeeMoreContainer>

                </ProjectsGrid>
            </Container>
        </ProjectsSection >
    );
};

export default Projects;
