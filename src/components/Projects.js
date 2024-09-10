import "./styles/Projects.css"
import passgen  from "../../src/components/images/passgen.png"
import R3plastics  from "../../src/components/images/R3Plastics.png"
import MorningBot  from "../../src/components/images/MorningBot.png"
import bramptongeoguessr from "../../src/components/images/bramptongeoguessr.png"


const projects  = () => (
    <div className="projects-area" id="projects-section">
        <h1>Projects</h1>
        <span>Click the icons to see more!</span>
        <div className="projects1">
            <a href="https://github.com/itsaddai/Passgen" target="_blank" rel="noopener noreferrer">
                <img src={passgen} alt="passgen logo"></img>
            </a>
            <p>
            Passgen is currently my biggest project, and working on it<br></br> pushed me
            to expand my full-stack development skills.
            <br></br>
             I used the MERN stack (MongoDB, Express, React, Node.js)<br></br>
              to build a secure password generator and manager.
             <br></br>
             On the backend, I focused on building a secure authentication<br></br>
            system with JWT and Bcrypt to encrypt user data,
            <br></br>
             while the frontend was about making password generation<br></br> user-friendly,
              using React and Axios for smooth functionality.<br>
            </br> This project developed my understanding of<br></br> creating a user authentication system and using a database.
            </p>
        </div>

        <div className="projects1">
            <a href="https://github.com/towel-cool/R3Plastic" target="_blank" rel="noopener noreferrer">

                <img src={R3plastics} alt="r3plastic logo"></img>
            </a>
            <p>
                Toronto, 3 friends, 3 days, lots of coffee, and the implementation 
                <br></br>  of the MERN stack to create an interactive website to fight
                <br></br>
                plastic waste. In this hackathon, I focused on the frontend,
                <br></br>
                 using React and Tailwind CSS to create a user-friendly interface.
                 <br></br>
                 This was centered around using the Cohere API to inform users<br></br>
                 to ask questions about recycling and plastic waste.
            </p>

        </div>

        <div className="projects1">
            <a href="https://github.com/itsaddai/Brampton-GeoGuessr" target="_blank" rel="noopener noreferrer">
            <img src={bramptongeoguessr} alt="brampton geoguessr logo"></img>
            </a>
            <p>
            GeoGuessr is a fun browser-based game I created using Google Maps'
            <br></br>
            Street View API. The goal is to guess which street you're on,
            <br></br>
            based on the random locations spawned in Brampton. 
            <br></br>
            I used JavaScript to manage the game logic, including scoring,
            <br></br>
            randomizing locations, and checking the player's guesses.
            <br></br>
            The user interface was styled with basic HTML and CSS for a clean look,
            <br></br>
            and I implemented interactive buttons for guessing the location. 
            <br></br>
            This project was a great way to practice integrating APIs
            <br></br>
            and adding interactive features to a web app.
            </p>
        </div>

        <div className="projects1">
            <a href="https://github.com/itsaddai/morningbot" target="_blank" rel="noopener noreferrer">
                <img src={MorningBot} alt="morningbot logo"></img>
            </a>
            <p>
            Morning Bot is a small Python Discord bot I built to integrate<br></br> into my morning routine. 
            It fetches the temperature for a city
            <br></br>
            I specify and shares a random positive quote to start the day
            <br></br> 
            on a good note. Using the OpenWeatherMap API for weather <br></br> data and ZenQuotes for quotes, the bot combines simple<br></br>
             functionality with Discord’s API.
            It was a fun way to automate
            <br></br>
            a part of my daily routine and practice integrating APIs with Python.
            </p>

        </div>

        
        <div className="projects1">    
        </div>
    </div>
)
export default projects;