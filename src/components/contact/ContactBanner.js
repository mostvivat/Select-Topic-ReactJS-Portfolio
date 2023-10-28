import React from 'react';
import './styles/ContactBannerStyle.css'; // Importing the new CSS file here
import Button from '../homepage/Button';
import PText from '../homepage/PText';

export default function ContactBanner() {
  return (
    <div className="contact-banner">
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in mind</PText>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </div>
  );
}
