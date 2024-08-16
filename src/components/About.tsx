import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-4">
      <h2>About Me</h2>
      <p>
        <a href="https://www.linkedin.com/in/yourprofile">LinkedIn</a><br />
        <a href="https://github.com/yourprofile">GitHub</a><br />
        <a href="/resume.pdf" target="_blank">Resume</a><br />
        <a href="mailto:youremail@example.com">Email</a>
      </p>
    </section>
  );
};

export default About;