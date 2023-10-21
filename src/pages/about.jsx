import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Work from "../components/about/Work";
// eslint-disable-next-line
import { workDetails, eduDetails } from "../components/about/Details"
import Socials from "../components/about/socials";
import INFO from "../data/user";
import SEO from "../data/seo";
import { HiDownload } from "react-icons/hi";
import "./styles/about.css";
import Skills from "../components/about/skills";


const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
	
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
			</Helmet>
			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								
								<a className="download-btn " href="/Resume_Vivat.pdf" download>
   									 Download CV <HiDownload className="download-icon" />
								</a>
								
							</div>
							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<main className="container mx-auto max-width pt-10 pb-20 ">
        						<h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          							Education
        						</h1>
        							{React.Children.toArray(
          							eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            							<Work
              								position={Position}
              								company={Company}
              								location={Location}
              								type={Type}
              								duration={Duration}
            							/>
          							))
        							)}
    					</main>
						<Skills/>
						<div className="about-socials-mobile">
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

export default About;
