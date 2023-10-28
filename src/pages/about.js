import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Work from "../components/about/Work";
import Skills from "../components/about/skills";
// eslint-disable-next-line
import { workDetails, eduDetails } from "../components/about/Details"
import INFO from "../data/user";

import { HiDownload } from "react-icons/hi";
import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
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
							</div>
						</div>
        				<h1>
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
						<h1>
          					Skills
        				</h1>
						<Skills/>
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
