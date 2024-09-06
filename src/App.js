import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';



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

      <div id="Navbar">
        <Navbar />
      </div>

      
  
    </div>
  );
}

export default App;
