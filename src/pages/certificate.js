import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllCertificates from "../components/certification/allCerti";
import INFO from "../data/user";

import "./styles/certificate.css";

const Certificate = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="certificate" />
        <div className="content-wrapper">
          <div className="contact-container">
            <div className="title ">My certificates</div>
            <div className="subtitle certificate-subtitle">
									{INFO.cer.description}
						</div>
            <AllCertificates />
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Certificate;
