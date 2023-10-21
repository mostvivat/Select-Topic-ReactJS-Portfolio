import React from "react";
import Certificate from "./cerificate";  // Changed from Project to Certificate
import INFO from "../../data/user";
import "./styles/allCerti.css";   // Changed the CSS file name

const AllCertificates = () => {
    return (
        <div className="all-certificates-container"> 
            {INFO.certificates.map((certificate, index) => (  
                <div className="all-certificates-certificate" key={index}>  
                    <Certificate
                    key={index}
                    image={certificate.image}
                    title={certificate.name}
                    issuedBy={certificate.by}
                    credentialsLink={certificate.links.credentials}
                    />
                </div>
            ))}
        </div>
    );
};

export default AllCertificates;
