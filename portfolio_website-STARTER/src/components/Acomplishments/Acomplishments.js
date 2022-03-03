import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: "Dean's List" },
  { text: 'Session Leader of Eleet Coders Club' },
  { text: 'HackerRank Certificate for Python (Basic)' },
  { text: 'LinkedIn Skill Assessment Passed for HTML' },
  { text: 'LinkedIn Skill Assessment Passed for CSS' }
];

const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,i) => (
        <Box key={i}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
