import React from 'react';
import { DiReact } from 'react-icons/di';
import { AiFillGithub } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='skills'>
    <SectionDivider />
    <br/>
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in my college career. From Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <FaCode size="3rem"/>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, Python, SQL, JavaScript, HTML/CSS, PHP
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, Node, Vue, Vite, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillGithub size="3rem"/>
        <ListContainer>
          <ListTitle>Developer Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git, VS Code, Eclipse, phpMyadmin
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
