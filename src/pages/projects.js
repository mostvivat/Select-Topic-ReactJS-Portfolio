import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";
import "./styles/projects.css";
import INFO from "../data/user";

const Projects = () => {
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve made during study.
						</div>
						<div className="subtitle projects-subtitle">
							{INFO.pro.description}
						</div>
						<div className="projects-list">
							<AllProjects />
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
export default Projects;
