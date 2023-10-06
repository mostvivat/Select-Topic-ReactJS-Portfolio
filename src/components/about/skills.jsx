import React, { useState } from 'react';

const skills = [
    { name: 'CSS3', logo: '../../../public/css3.png' },
];

const tools = [
    { name: 'Git', logo: './assets/images/git.png' },
];

const Skills = () => {
    const [showSkills, setShowSkills] = useState(true);

    const toggleSkills = () => {
        setShowSkills(!showSkills);
    };

    return (
        <section className="skills" id="skills">
            <div className="skills-content section-content">
                <p className="section-subtitle">My skills</p>
                <h2 className="h3 section-title">What My Programming Skills Included?</h2>
                <p className="section-text">
                    I develop simple, intuitive, and responsive user interfaces that help users get things done with less effort and time with those technologies.
                </p>
            </div>
        </section>
    );
};

export default Skills;
