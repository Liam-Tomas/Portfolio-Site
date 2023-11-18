import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import Button from '../Button'
import media from 'styled-media-query';

const ResumeContentWrapper = styled.div`
`;

const ResumeContent = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0px auto;
  padding: 2.5rem 3rem;
  color: ${props => props.theme.text};
  // box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  z-index: 3001;
  max-width: 950px;
  max-height: 90vh;
  ${media.lessThan("medium")`
    padding: 1.5rem 1.5rem;
    max-height: 70vh;

  `};
  
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

const EntryDescription = styled.div`
  font-size: 16px;
  color: ${props => props.theme.textGrey};
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  ul {
    list-style: disc;
    margin-left: 15px;
  }
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

  ${media.lessThan("medium")`
    font-size: 26px;
  `};

`;

const Description = styled.p`
  color: ${props => props.theme.textGrey};
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  ${media.lessThan("medium")`
    margin-top: 15px;

  `};
  `;

const TitleHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ResumeContentWrapper>

        <ResumeContent>
          <TitleSection>
            <TitleHeader>
              <Name>Liam Armstrong</Name>
              <DownloadLink href="https://drive.google.com/file/d/1fQ7FswqlK12KNZafYpzTgN4YexsqfjcZ/view?usp=sharing" download target="_blank" rel="noopener noreferrer">
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

          <SectionHeader>WORK EXPERIENCE</SectionHeader>

          <EntryTitle>American Federation of Teachers</EntryTitle>
          <EntrySubtitle>Policy Analyst</EntrySubtitle>
          <EntryDescription>
            <ul>
              <li>Authored an official complaint to the UN Human Rights Council regarding global education disparities, contributing to the AFT's advocacy efforts in international education. The complaint advanced to the final stages of review and was underscored by the AFT president's presentation at the UN headquarters in Geneva.</li>
              <li>Conducted in-depth analysis on international schooling systems and unions, leading to significant contributions to the AFT's annual report on global education trends.</li>
              <li>Drafted critical resolutions on international teaching policy, influencing the union's stance on global issues.</li>
              <li>Developed civic education materials and maintained AFT’s website, enhancing its educational utility.</li>
            </ul>
          </EntryDescription>

          <EntryTitle>Nation Alliance on Mental Illness</EntryTitle>
          <EntrySubtitle>Helpline Specialist</EntrySubtitle>

          <EntryDescription>
            <ul>
              <li>Provided crisis counseling and support to over 300 callers monthly, guiding them through treatment, legal issues, emotional support and disability assistance.</li>
              <li>Participated in a project to streamline the helpline's resources, enhancing response efficiency and improving caller satisfaction.</li>
              <li>Led training for new helpline specialists, equipping them with essential skills in crisis counseling and support, and enhancing the team's efficiency and effectiveness in handling complex mental health cases.</li>
            </ul>
          </EntryDescription>

          {/*      !!!!!!   !!! PROJECT SECTION !!!  !!!! */}
          <SectionHeader>PROJECTS</SectionHeader>

          <EntryTitle>Recipe Finder App</EntryTitle>
          <EntrySubtitle>Technologies: Javascript, React, Mongodb, Node, Material UI</EntrySubtitle>
          <EntryDescription>
            Developed a fully functional CRUD web app using React and Node.js. Allows users to create a profile, login, search through a large API of recipes, add recipes to their favorites, and create their own.
          </EntryDescription>
          <EntryTitle>Ecommerce Data Analysis</EntryTitle>
          <EntrySubtitle>Technologies: SQL, MySQL, Python (pandas), Tableu, Excel</EntrySubtitle>
          <EntryDescription>
            Comprehensive analysis of an Ecommerce dataset to extract valuable insights, trends, and business intelligence.
          </EntryDescription>
          <SectionHeader>ADDITIONAL</SectionHeader>
          <EntryTitle></EntryTitle>
          <EntrySubtitle><b>Languages</b>: Javascript, Python, SQL, CSS, C++
            Libraries/Frameworks/Tools: Pandas, Express.js, Node.js, Mongodb, Material UI, Node, Git/Github, Excel, Jira, PostgreSQL, MySQL, Tableau, PowerBI
            Volunteer: Experience at home and abroad for various organizations including Amnesty International & more.
          </EntrySubtitle>
          <EntrySubtitle>
            <b>Libraries/Frameworks/Tools</b>: Pandas, Express.js, Node.js, Mongodb, Material UI, Node, Git/Github, Excel, Jira, PostgreSQL, MySQL, Tableau, PowerBI
          </EntrySubtitle>
          <EntrySubtitle>
            <b>Volunteer</b>: Experience at home and abroad for various organizations including Amnesty International & more.
            <div><br/></div>
          </EntrySubtitle>
          <EntryDescription> </EntryDescription>

        </ResumeContent>
      </ResumeContentWrapper>
    </Modal>
  );
};

export default ResumeModal;
