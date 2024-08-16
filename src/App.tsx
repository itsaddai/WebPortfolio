import Hero from './components/Hero'; // Import the Hero component
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import { Dock, DockIcon } from './components/Dock'; // Import the Dock and DockIcon components


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero /> {/* Hero component */}
        <div className="relative">
          <Dock magnification={60} distance={100}>
            <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
              <DockIcon.gitHub className="size-full" />
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
              <DockIcon.email className="size-full" />
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
              <DockIcon.linkedIn className="size-full" />
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
              <DockIcon.resume className="size-full" />
            </DockIcon>
          </Dock>
        </div>
      </header>
      <main className="p-4">
        <About /> {/* About section */}
        <Projects /> {/* Projects section */}
        <Technologies /> {/* Technologies section */}
      </main>
    </div>
  );
}

export default App;
