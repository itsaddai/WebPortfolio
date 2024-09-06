import React from 'react';
import Typist from 'react-typist-component';
import "./styles/Typist.css"
import "./styles/Hero.css"

//typist backspace function
const createBackspaceSequence = (count, delayBetween = 100) => {
    return Array.from({ length: count }).map((_, i) => (
      <React.Fragment key={i}>
        <Typist.Backspace count={1} />
        <Typist.Delay ms={delayBetween} />
      </React.Fragment>
    ));
  };
const Hero = props => (

    <div className="hero-area">
    <div className="hero-image"/>
    <div className="hero-box">
      <div className="text-line">
        <div className="spacer"/>
        <h1>Hey! My name's Isaac,</h1>
      </div>
      <div className="text-line">
        <div className="spacer" />
        <h1>and I make</h1>
      </div>
      <div className="text-line">
        <div className="spacer" />
        <h1>
          <Typist startDelay={1500}
           avgTypingDelay={80} 
           stdTypingDelay={20} 
          cursor={<span className='cursor cursor--blinking' >|</span>}
           hideCursorWhenDone={true}
           finishDelay={2000}
           >
            programs
            <Typist.Delay ms={1250} />
            {createBackspaceSequence(8)}
            
            websites
            <Typist.Delay ms={1250} />
            {createBackspaceSequence(8)}
            food :)
            <Typist.Delay ms={1250} />
            {createBackspaceSequence(7)}
            stuff.
          </Typist>
        </h1>
      </div>
    </div>
  </div>
  
)
export default Hero;