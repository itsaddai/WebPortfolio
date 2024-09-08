import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/Technologies';



function App() {
  return (
    <div className="App">
      <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="technologies">
        <Technologies />
      </div>
  
    </div>
  );
}

export default App;
