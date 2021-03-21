import './App.css';
// import './components/js/main';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
