import React from "react";
import "./styles/About.css";

//import images

import linkedin from "../../src/components/images/linkedin2.png"
import email from "../../src/components/images/email2.png"
import github from "../../src/components/images/github2.png"
import resume from "../../src/components/images/resume2.png"

const About = (props) => (
  <div className="about-section" id="about-section">
    <h1>About Me</h1>
    <span>learn about me :))</span>
    <div className="about-info" >
      <div className="image-area">
        
      </div>
      <p>
        Hey! Appreciate you for checking out my portfolio! My name's Isaac, and I'm a fourth-year at <br></br> <b>Wilfrid Laurier University</b>.
        I'm completing a <b>BSc in Computer Science</b> with a minor in <b>Leadership</b>, with an expected graduation date of <b>April 2025. </b> 
       Actions speak louder than words, so here's some of the stuff I've done for the past few years. 
        <br/> <br/>
        I was the VP of Technology for Laurier Fintech, an Outreach Coordinator for the Laurier Computing Society, and am 
        currently looking for Software Development positions or internships for the Winter 2025, and/or Summer 2025.
        <br/> <br/>
        I'm interested in food, the gym, video games (how original), and solving problems with computers.
        If you wanna talk to me about any of that, send me a message!
        <br/>
        <br/>
         You can checkout my résumé, linkedin, github, and email me through the buttons on the side, or scroll down to see all my projects:
      </p>
      <div className="self-contact-info">
        <a href="Isaac_Addai_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <img src={resume} alt="investigate here!" className="class-a" />
        </a>
        <br/>
        <a href="https://linkedin.com/in/isaacaddai" className="class-b" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="see my projects!" />
        </a>
        <br/>
        <a href="https://github.com/itsaddai" className="class-c" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="see my projects!" />
        </a>
        <br/>
        <a href="mailto:IsaacKojoAddai@outlook.com" className="class-d" target="_blank" rel="noopener noreferrer">
          <img src={email} alt="send me mail electronically!" />
        </a>
      </div>
    </div>
    <div className="resume-area">
      <div className="invisible-spacer" />
    </div>
  </div>
);
export default About;