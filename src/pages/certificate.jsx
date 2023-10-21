import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import SEO from "../data/seo";
import AllCertificates from "../components/certification/allCerti";
import "./styles/certificate.css";

const Certificate = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "certificate");

  

    return (
        <React.Fragment>
            <Helmet>
                <title>{`certificate | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
            </Helmet>

            <div className="page-content">
                <NavBar active="certificate" />
                <div className="content-wrapper">
                    <div className="certificate-container">
                                <h1>
                                    <i className="fas fa-laptop-code"></i> My Certificates
                                </h1>
                        
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
