import React from 'react';
import './styles/ContactInfoItemStyle.css'; 
import PText from '../homepage/PText';

export default function ContactSocialsItem({
  iconPath = '/skills/icons8-android-studio.svg',
  text = 'I need text',
  link = 'http://www.example.com',
}) {
  return (
    <div className="contact-social-item">
      <div className="icon">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', width: '20px', height: '20px' }} // Set the size here
        >
          <img 
            src={process.env.PUBLIC_URL + iconPath} 
            alt="Icon" 
            style={{ width: '20px', height: '20px', display: 'block', margin: 'auto' }} // Center the icon within the <a> tag
          />
        </a>
      </div>
      <div className="info">
        <div className="ptexts">
        <PText>{text}</PText>
        </div>
      </div>
    </div>
  );
}
