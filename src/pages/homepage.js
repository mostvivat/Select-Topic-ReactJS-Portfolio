import React, { useEffect } from "react";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faGithub,faInstagram,} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/homepage/allProjectshome";
import INFO from "../data/user";
import AboutSection from "../components/homepage/AboutSection";
import Contactsection from "../components/homepage/contactsection"
import "./styles/homepage.css";


const Homepage = () => {
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container" >
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<div class="typewriter-text">
  									<div class="line" id="line1">
    									Hello 👋, I'm Vivat Chongsomchit
 									</div>
  									<div class="line" id="line2">
									  an undergraduate student at KMUTNB
  									</div>
									</div>
								</div>
							</div>
							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.facebook}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faFacebookF}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						<AboutSection className="about-section" />
						<div className="homepage-projects">
							<AllProjects />
						</div>
						<div className="homepage-after-title">
							<div className="homepage-works">
								<Works/>
							</div>
							<div className="homepage-contact">
								<Contactsection/>
							</div>
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

export default Homepage;