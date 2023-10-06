import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/certificate.css";

const Certificate = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "certificate");

    const certificates = [
        {
            title: 'Certificate in Web Development',
            issuer: 'XYZ University',
            date: 'June 2022',
            logo: 'path_to_logo',
            // Add other details as needed
        },
        // Add more certificates as needed
    ];

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
                        <div className="certificate-main">
                            <div className="certificate-right-side">
                                <h2>
                                    <i className="fas fa-laptop-code"></i> My Certificates
                                </h2>
                                <ul>
                                    {certificates.map((cert, index) => (
                                        <li key={index}>
                                            <h3>{cert.title}</h3>
                                            <p>Issued by: {cert.issuer}</p>
                                            <p>Date: {cert.date}</p>
                                            <img src={cert.logo} alt={`${cert.title} logo`} />
                                            {/* Add other details as needed */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="certificate-socials-mobile">
                            <Socials />
                        </div>
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
