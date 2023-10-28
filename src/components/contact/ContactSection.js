import React from 'react';
import './styles/contactsection.css'; // Importing the CSS file
import { MdEmail, MdLocalPhone } from 'react-icons/md';
// import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from '../homepage/SectionTitle';
import ContactSocialsItem from './ContactSocialsItem';

export default function ContactSection() {
  return (
    <div className="contact-section">
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+66971595272" />
            <ContactInfoItem icon={<MdEmail />} text="pokemost@gmail.com" />
            <ContactInfoItem text="Bangkok, Thailand" />
          </div>
          <div className="right">
              <ContactSocialsItem iconPath="skills/icons8-github.svg" text="GitHub" link="https://github.com/mostvivat" />
              <ContactSocialsItem iconPath="skills/icons8-linkedin-50.svg" text="LinkedIn" link="https://www.linkedin.com/in/vivat-chongsomchit-72108a275/"/>
              <ContactSocialsItem iconPath="/skills/icons8-facebook.svg" text="Facebook" link="https://www.facebook.com/vivatmost" />
          </div>
        </div>
      </div>
    </div>
  );
}
