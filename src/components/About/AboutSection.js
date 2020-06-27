import React from 'react';
import { AboutTitle, AboutParagraph, AboutGrid, AboutContainer, SkillsContainer } from './AboutStyles';

const AboutSection = () => (
    <AboutGrid>
        <AboutContainer>
            <AboutTitle>About Me</AboutTitle>
            <AboutParagraph>I’m a front end web developer based in Chicago, IL. I began coding in 2018 and I haven’t stopped ever since. I love being able to create beautiful designs with different technologies. If you are interested in working with me please send a message via the contact form or <a href="mailto:jgmatias@protonmail.com">email me</a> directly. 
            <div>
            This portfolio was made with React. You can check out the code <a href="https://github.com/jessiematias/portfolio">here.</a>
            </div> </AboutParagraph> 
        </AboutContainer>
        <SkillsContainer>
            <AboutTitle>Skills</AboutTitle>
            <div>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Gulp</li>
                </div>

            <div>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Jest</li>
                </div>

            <div>
                <li>Bootstrap</li>
                <li>Ant Design</li>
                <li> Material UI</li>
                </div>

            <div>
                <li>BEM</li>
                <li>npm</li>
                <li>Git and Github</li>
            </div>


        </SkillsContainer>
    </AboutGrid>
)

export default AboutSection