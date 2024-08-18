// Import necessary components
import Hero from './components/Hero'; 
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import { Dock, DockIcon } from './components/Dock';

// Import icons (You can use react-icons or any other icon library)
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero /> {/* Hero component */}
        <div className="relative mt-8">
          <Dock magnification={50} distance={40} className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
              <FaGithub className="w-full h-full" /> {/* GitHub */}
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
              <FaEnvelope className="w-full h-full" /> {/* Email */}
            </DockIcon>
            
            <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
              <FaLinkedin className="w-full h-full" /> {/* LinkedIn */}
            </DockIcon>
            
            
            <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
              <FaFileAlt className="w-full h-full" /> {/* Resume */}
            </DockIcon>
           
          </Dock>
        </div>
      </header>
      <main className="p-4">
        <About /> 
        <Projects /> 
        <Technologies/>
      </main>
    </div>
  );
}

export default App;
