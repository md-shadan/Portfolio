import About from './component/About';
import Skills from './component/Skills';
import Home from './component/home';
import Navbar from './component/navbar';
import Work from './component/Work';
import Contact from './component/Contact';


function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </h1>
    </div>
  );
}

export default App;
