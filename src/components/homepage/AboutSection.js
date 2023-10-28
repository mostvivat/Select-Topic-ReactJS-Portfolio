import React from 'react';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../../assets/images/profile.png';
import "../../components/homepage/styles/AboutSectionStyles.css"

export default function AboutSection() {
  return (
    <div className="aboutSection">
  <div className="container">
    <div className="aboutSection__left">
      <img className="aboutImg" src={AboutImg} alt="Img" />
    </div>
    <div className="aboutSection__right">
    <SectionTitle
        subheading="Let me introduce myself"
        heading="About Me"
      />
      <div className="ptext">
        <PText >
          <span className="bouncing-text">(👉ﾟヮﾟ)👉</span> Hi, I'm Most, a 22-year-old Electronics Engineering Technology (Computer) student at King Monkut's University Of Technology North Bangkok. Based in Bangkok, Thailand.
        </PText>
      </div>
      <div className="aboutSection__buttons">
        <Button btnText="Works" btnLink="/projects" />
        <Button btnText="Read More" btnLink="/about" outline />
      </div>
    </div>
  </div>
</div>

  );
}
