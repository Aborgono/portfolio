import './App.css';
import AboutMe from './Components/AboutMe/aboutMe';
import Contact from './Components/Contact/contact';
import Header from './Components/Header/header';
import Projects from './Components/Projects/project';
import Skills from './Components/Skills/skills';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
