import React from 'react';
import './styles/Ptext.css'; // Import the new CSS file

export default function PText({ children }) {
  return (
    <div className="para">
      <p>{children}</p>
    </div>
  );
}
