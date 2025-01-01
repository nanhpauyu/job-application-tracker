import About from './component/About';
import Awards from './component/Awards';
import Database from './component/Database';
import Education from './component/Education';
import Experience from './component/Experience';
import Interests from './component/Interests';
import JSJourney from './component/JSJourney';
import Nav from './component/Nav';
import Projects from './component/Projects';
import Skills from './component/Skills';


function App() {
  return (
    <>
      <Nav />
      <div class="container-fluid p-0">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Interests />
        <Awards />
        <JSJourney />
        <Database />
      </div>
    </>
  );
}

export default App;
