import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const ResumeContent = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.5rem 3rem;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  z-index: 3001; // A value greater than SpotlightStyled's z-index
  `;

const SectionHeader = styled.h1`
  font-size: 24px;
  color: #333;
  border-bottom: 2px solid ${props => props.theme.textLight};
  padding-bottom: 10px;
  color: ${props => props.theme.text};
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight:500;
`;

const EntryTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #555;
  margin-top: 10px;
  
  color: ${props => props.theme.text};

`;

const EntrySubtitle = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textGrey};
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-family: 'Roboto', sans-serif;
`;

const EntryDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textGrey};
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-family: 'Roboto', sans-serif;

  `;

const DownloadLink = styled.a`
  display: inline-block;
  color: #FFF;
  text-align: center;
  transition: background-color 0.3s ease;

`;

const TitleSection = styled.div`
  margin-bottom: 30px;
`;

const Name = styled.h1`
  font-size: 32px;
  color: ${props => props.theme.text};

`;

const Description = styled.p`
  color: ${props => props.theme.textGrey};
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

const TitleHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ResumeContent>
        <TitleSection>
          <TitleHeader>
            <Name>Liam Armstrong</Name>
            <DownloadLink href="https://drive.google.com/file/d/1C0T6wnw1AfNv5xQKVHRV7CH_n3r_C0bm/view?usp=sharing" download target="_blank" rel="noopener noreferrer">
              <Button>
              {/* <FontAwesomeIcon icon={faDownload} /> */}
                View PDF     
              </Button>
            </DownloadLink>
          </TitleHeader>
          <Description>ltarmstrong94@gmail.com; (650) 384-5746</Description>

        </TitleSection>
        <SectionHeader>EDUCATION</SectionHeader>
        <EntryTitle>Oregon State University</EntryTitle>
        <EntrySubtitle>B.S. in Computer Science, Expected Graduation: Summer 2024</EntrySubtitle>
        <EntrySubtitle>Relevant Coursework: Data Structures, Databases, Algorithms, UI Design, Discrete Math, Python</EntrySubtitle>
        <EntryDescription></EntryDescription>

        <EntryTitle>University of San Francisco</EntryTitle>
        <EntrySubtitle>B.A. in International Economics, 2015-2019</EntrySubtitle>
        <EntrySubtitle>Relevant Coursework: Statistics, Econometrics</EntrySubtitle>
        <EntryDescription></EntryDescription>

        <SectionHeader>PROJECTS</SectionHeader>

        <EntryTitle>Recipe Finder App</EntryTitle>
        <EntrySubtitle>Technologies: Javascript, React, Mongodb, Node, Material UI</EntrySubtitle>
        <EntryDescription>Developed a fully functional CRUD web app using React and Node.js. Allows users to create a profile, login, search through a large API of recipes, add recipes to their favorites, and create their own.</EntryDescription>

        <EntryTitle>Ecommerce Data Analysis</EntryTitle>
        <EntrySubtitle>Technologies: Python, Documentation, Open Source</EntrySubtitle>
        <EntryDescription>Enhanced the Spotipy Python library's documentation by creating "authorization.rst" in the /docs directory, which features clear explanations and practical examples of the Authorization Code Flow and Client Credentials Flow. </EntryDescription>

        <SectionHeader>WORK EXPERIENCE</SectionHeader>

        <EntryTitle>American Federation of Teachers</EntryTitle>
        <EntrySubtitle>Policy Analyst</EntrySubtitle>
        <EntryDescription>Conduct research and write briefing papers on various topics in education policy;
          Attend and report on foreign policy forums and Congressional hearings;
          Assist in developing civic education and teaching materials;
          Assist in maintaining the International Affairs website, creating trainer contact database and distributing info regarding AFT international activities.
        </EntryDescription>

        <EntryTitle>Nation Alliance on Mental Illness</EntryTitle>
        <EntrySubtitle>Helpline Specialist</EntrySubtitle>
        <EntryDescription>Provide information and support for people suffering from a range of mental health conditions;
          Responsibilities include guiding callers on where to find treatment, providing crisis counseling, helping navigate legal issues, assistance with securing disability, offering emotional support and more.
        </EntryDescription>


        <SectionHeader>SKILLS</SectionHeader>

        <EntryTitle></EntryTitle>
        <EntrySubtitle>Python, Javascript, SQL, React, Node, MySQL, Mariadb, Tableu, PowerBI, Tailwind, Material UI,
          Excel, Statistics, Mongodb, Express, Git, Github
        </EntrySubtitle>
        <EntryDescription> </EntryDescription>

      </ResumeContent>
    </Modal>
  );
};

export default ResumeModal;
