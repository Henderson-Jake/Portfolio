import './App.css';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import Footer from './components/Footer.js'
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import 'normalize.css'

function App() {
  return (
    <div className="App">
      <Header />  
      <Intro />
      <About />
    </div>
  );
}

export default App;
