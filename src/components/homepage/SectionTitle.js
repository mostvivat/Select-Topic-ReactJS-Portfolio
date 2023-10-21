import React from 'react';
import './styles/Sectiontitlestyle.css'; // Import the new CSS file

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <div className="section-title">
      <p>{subheading}</p>
      <h2 className="heading-gradient">{heading}</h2> {/* Added class here */}
    </div>
  );
}
