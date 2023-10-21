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
          <PText>
            Hello! I'm Vivat Chongsomchit . You can call me Most,a dedicated university student at KMUTNB. At 22,My academic journey and personal interests are deeply rooted in the world of Software Testing Life Cycle (STLC), where I am eager to explore, learn, and contribute."
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline/>
          </div>
        </div>
        
      </div>
    </div>
  );
}
