import React from 'react';

const Skills = () => {
  return (
    <div className="skills d-flex flex-column" id="skills">
      <div className="container d-flex flex-column">
        <div className="title" data-aos="fade-down" data-aos-duration="1000">
          <h2>
            <i className="fas fa-laptop-code"></i> Skills   
          </h2>
        </div>

        <SkillBox
          title="Developer"
          subtitle="Tools"
          images={[
            { src: 'skills/icons8-github.svg', alt: 'GITHUB' },
            { src: 'skills/icons8-git.svg', alt: 'GIT'}           ,
            { src: 'skills/icons8-android-studio.svg', alt: 'ANDROID STUDIO' },
            { src: 'skills/icons8-visual-studio.svg', alt: 'VS CODE' },
            { src: 'skills/icons8-firebase.svg', alt: 'FIREBASE' },
          ]}
          animation={{ direction: 'fade-left', duration: '1000' }}
        />
        <SkillBox
          title="Programming "
          subtitle="Languages"
          images={[
            { src: 'skills/icons8-html-5.svg', alt: 'HTML5' },
            { src: 'skills/icons8-css3.svg', alt: 'CSS3' },
            { src: 'skills/icons8-javascript.svg', alt: 'JAVASCRIPT' },
            { src: 'skills/icons8-react-native.svg', alt: 'REACT' },
            { src: 'skills/icons8-python.svg', alt: 'PYTHON' },
            { src: 'skills/icons8-java.svg', alt: 'JAVA' },
            { src: 'skills/icons8-c-programming.svg', alt: 'C' },
            { src: 'skills/icons8-c++.svg', alt: 'C++' },
            { src: 'skills/icons8-mysql-logo.svg', alt: 'MYSQL' },
            { src: 'skills/icons8-php-logo.svg', alt: 'PHP' },
            { src: 'skills/rust.png', alt: 'RUST' },
            { src: 'skills/icons8-dart.svg', alt: 'DART' },
            { src: 'skills/icons8-flutter.svg', alt: 'FLUTTER' },
          ]}
          animation={{ direction: 'fade-right', duration: '1000' }}
        />
        <SkillBox
          title="Testing"
          subtitle="Tools"
          images={[
            { src: 'skills/icons8-jira.svg', alt: 'Jira' },
            { src: 'skills/icons8-selenium.svg', alt: 'Selenium' },
            { src: 'skills/postman.png', alt: 'Postman' },
            { src: 'skills/icons8-trello.svg', alt: 'Trello' },
          ]}
          animation={{ direction: 'fade-right', duration: '1000' }}
        />

        <SkillBox
          title="Other"
          subtitle="Tools"
          images={[
            //excel canva notion powerpoint obs
            { src: 'skills/icons8-adobe-premiere-pro.svg', alt: 'Premiere Pro' },      
            { src: 'skills/icons8-adobe-photoshop.svg', alt: 'Photoshop' },
            { src: 'skills/icons8-excel.svg', alt: 'Excel' },
            { src: 'skills/icons8-powerpoint.svg', alt: 'Powerpoint' },
            { src: 'skills/icons8-word.svg', alt: 'Word' },
            { src: 'skills/icons8-canva.svg', alt: 'Canva' },
            { src: 'skills/icons8-notion.svg', alt: 'Notion' },
            { src: 'skills/icons8-obs.svg', alt: 'OBS'}
        

           
            //... Add all the other images similarly
          ]}
          animation={{ direction: 'fade-left', duration: '1000' }}
        />
      </div>
    </div>
  );
};

const SkillBox = ({ title, subtitle, images, animation }) => {
  return (
    <div className="box" data-aos={animation.direction} data-aos-duration={animation.duration}>
      <h3>
        {title}
        <span> {subtitle}</span>
      </h3>
      <div className="image">
        {images.map((image, index) => (
          <img key={index} draggable="false" src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
