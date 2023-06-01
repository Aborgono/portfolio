import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
