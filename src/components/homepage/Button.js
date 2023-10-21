import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ButtonStyles.css'; // Import the new CSS file

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <div className={`button-wrapper ${outline ? 'button-outline' : ''}`}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </div>
  );
}
