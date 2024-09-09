import React from "react";
import "./styles/Technologies.css";

const Technologies = () => {
  const techStack = [
    {
        
      category: "Languages",
      paragraph:"Some of the programming languages and technologies I've been working with recently include",
      items: [
        <code>- HTML</code>,
        <code>- CSS</code>,
        <code>- Javascript</code>,
        <code>- Python</code>,
        <code>- C</code>,
        <code>- Java</code>,
        
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        <code>- Express</code>,
        <code>- React</code>,
        <code>- Node.js</code>,
        
      ] 
    },
    {
      category: "Databases",
      items: [
        <code>- MongoDB</code>,
        <code>- MySQL</code>,
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        <code>- Git</code>,
        <code>- Docker</code>,
      ]
    }
  ];

  return (
    <div className="technologies-section" id="technologies-section">
      <h1>Technologies</h1>
      <div className="technologies-content">
        {techStack.map((tech, index) => (
          <div className="tech-category" key={index}>
            <h2>{tech.category}</h2>
            <ul>
              {tech.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
