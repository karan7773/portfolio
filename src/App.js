import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
