import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

import "./styles/certificate.css";  // Update the CSS file name if necessary

const Certificates = (props) => {
  const { image, title, issuedBy, credentialsLink } = props;

  return (
    <React.Fragment>
      <div className="certificate">
        <div className="certificate-container">
          <div className="certificate-image">
            <img src={image} alt={title} />
          </div>
          <div className="certificate-title">{title}</div>
          <div className="certificate-issuedBy">Issued by: {issuedBy}</div>
          <div className="certificate-link">
            <div className="certificate-link-icon">
              <FontAwesomeIcon icon={faCertificate} />
            </div>
            <a 
                href={credentialsLink} 
                target="_blank" 
                rel="noreferrer"
                className="certificate-link-text">
                View Certificate
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Certificates;
