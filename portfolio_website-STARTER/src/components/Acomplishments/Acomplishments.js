import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: "Dean's List" },
  { text: 'Session Leader of Eleet Coders Club', }
];

const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Personal Accomplishments</SectionTitle>
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
