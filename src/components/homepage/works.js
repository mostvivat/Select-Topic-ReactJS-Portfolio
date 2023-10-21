import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="EDUCATION"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">UNDERGRADUATE</div>
							<div className="work-subtitle">
								KMUNTB
							</div>
							<div className="work-duration">2020 - Present</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">HIGH SCHOOL</div>
							<div className="work-subtitle">
								HORWANG
							</div>
							<div className="work-duration">2017 - 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
