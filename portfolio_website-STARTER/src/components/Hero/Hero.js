import React from 'react';
// import Axios from "axios";
// import FileDownload from "js-file-download";

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {

  // function handleDownload(e){
  //   e.preventDefault();
  //   Axios({
  //     url: "http://localhost:5000",
  //     method: "GET",
  //     responseType: "blob"
  //   }).then((res) =>{
  //     FileDownload(res.data, "JohnnyT_Resume.pdf")
  //   })
  // }

  return(
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Johnny Tejada's Portfolio
      </SectionTitle>
      <SectionText>
        Well balanced and organized full time student that displays ambition and motivation in learning.
      </SectionText>
      <Button onClick={() => window.location= 'https://drive.google.com/file/d/1f_fJY5FMM-WogfkFN321d8ZYYPYLaPtq/view?usp=sharing'}>Learn More</Button>
    </LeftSection>
  </Section>
  )
};

export default Hero;