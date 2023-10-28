import React from 'react';
import { MdPlace } from 'react-icons/md';
import './styles/ContactInfoItemStyle.css'; // Import the new CSS file here
import PText from '../homepage/PText';

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <div className="contact-info-item">
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </div>
  );
}
