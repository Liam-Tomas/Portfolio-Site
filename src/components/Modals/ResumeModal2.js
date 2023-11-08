import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const ResumeContent = styled.div`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 35px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  z-index:3000;
`;

const SectionHeader = styled.h1`
  font-size: 24px;
  color: #333;
  border-bottom: 2px solid ${props => props.theme.textLight};
  padding-bottom: 10px;
  color: ${props => props.theme.text};
  margin-top: 20px;
  margin-bottom: 20px;
`;

const EntryTitle = styled.h2`
  font-size: 20px;
  color: #555;
  margin-top: 10px;

  color: ${props => props.theme.text};

`;

const EntrySubtitle = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textGrey};
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

`;

const EntryDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textGrey};
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

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
            <section id="main">
                <header id="title">
                    <h1>John Doe</h1>
                    <span class="subtitle">Plaintiff, defendant &amp; witness</span>
                </header>
                <section class="main-block">
                    <h2>
                        <i class="fa fa-suitcase"></i> Experiences
                    </h2>
                    <section class="blocks">
                        <div class="date">
                            <span>2015</span><span>present</span>
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                                <h3>Some Position</h3>
                                <span class="place">Some Workplace</span>
                                <span class="location">(remote)</span>
                            </header>
                            <div>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac. Maecenas viverra tortor eget convallis vestibulum. Donec pulvinar venenatis est, non sollicitudin metus laoreet sed. Fusce tincidunt felis nec neque aliquet porttitor</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section class="blocks">
                        <div class="date">
                            <span>2014</span><span>2015</span>
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                                <h3>Another Position</h3>
                                <span class="place">Some Workplace</span>
                                <span class="location">Some City, Some Country</span>
                            </header>
                            <div>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section class="blocks">
                        <div class="date">
                            <span>2013</span><span>2014</span>
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                                <h3>Yet Another Job Position</h3>
                                <span class="place">Some Workplace</span>
                                <span class="location">Some City, Some Country</span>
                            </header>
                            <div>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
                <section class="main-block">
                    <h2>
                        <i class="fa fa-folder-open"></i> Selected Projects
                    </h2>
                    <section class="blocks">
                        <div class="date">
                            <span>2015</span><span>2016</span>
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                                <h3>Some Project 1</h3>
                                <span class="place">Some workplace</span>
                            </header>
                            <div>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section class="blocks">
                        <div class="date">
                            <span>2014</span><span>2015</span>
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                                <h3>Some Project 2</h3>
                                <span class="place">Some workplace</span>
                            </header>
                            <div>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac. Maecenas viverra tortor eget convallis vestibulum. Donec pulvinar venenatis est, non sollicitudin metus laoreet sed. Fusce tincidunt felis nec neque aliquet porttitor</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section class="blocks">
                        <div class="date">
                            <span>2014</span>
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                                <h3>Some Project 3</h3>
                                <span class="place">Some workplace</span>
                            </header>
                            <div>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
                <section class="main-block concise">
                    <h2>
                        <i class="fa fa-graduation-cap"></i> Education
                    </h2>
                    <section class="blocks">
                        <div class="date">
                            <span>2009</span><span>2014</span>
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                                <h3>Ph.D. in Forty-Two Discovery</h3>
                                <span class="place">Inexistent University</span>
                                <span class="location">Some City, Some Country</span>
                            </header>
                            <div>Relationship of the number with the answer to life, the universe and everything</div>
                        </div>
                    </section>
                    <section class="blocks">
                        <div class="date">
                            <span>2005</span><span>2009</span>
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                                <h3>LL.B. in H&aelig;matophagic Economics</h3>
                                <span class="place">Inexistent University</span>
                                <span class="location">Some City, Some Country</span>
                            </header>
                            <div>President's Scholarship</div>
                        </div>
                    </section>
                    <section class="blocks">
                        <div class="date">
                            <span>2005</span><span>2009</span>
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                                <h3>B.S. in Existential Science (Double Major)</h3>
                                <span class="place">Inexistent University</span>
                                <span class="location">Some City, Some Country</span>
                            </header>
                            <div>President's Scholarship</div>
                        </div>
                    </section>
                    <section class="blocks">
                        <div class="date">
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                                <h3>Massive Online Fee&ndash;Required Course (selective list)</h3>
                            </header>
                            <div class="concise">
                                <ul>
                                    <li>Introduction to something else</li>
                                    <li>Introduction to some more useless things</li>
                                    <li>Philosophy in practice</li>
                                    <li>Recursive research and its impact on recursive research</li>
                                    <li>Artificial politics</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <aside id="sidebar">
                <div class="side-block" id="contact">
                    <h1>
                        Contact Info
                    </h1>
                    <ul>
                        <li><i class="fa fa-globe"></i> johndoe.gtld</li>
                        <li><i class="fa fa-linkedin"></i> linkedin.com/in/john</li>
                        <li><i class="fa fa-envelope"></i> me@johndoe.gtld</li>
                        <li><i class="fa fa-phone"></i> 800.000.0000</li>
                    </ul>
                </div>
                <div class="side-block" id="skills">
                    <h1>
                        Skills
                    </h1>
                    <ul>
                        <li>Omnipresence</li>
                        <li>Anonymity</li>
                    </ul>
                    <ul>
                        <li>Ordinarity</li>
                        <li>No name rights</li>
                    </ul>
                </div>
                <div class="side-block" id="disclaimer">
                    This r&eacute;sum&eacute; was wholly typeset with HTML/CSS &mdash; see <code>git.io/vVSYL</code>
                </div>
            </aside>
        </Modal>
    );
};

export default ResumeModal;




