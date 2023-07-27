import { BrowserRouter } from 'react-router-dom';

import About from './components/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Works from './components/Works';
import StarsCanvas from './components/StarsCanvas';

const App = () => {
  return(
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        <About />

        <Works />
        
        <Tech />
        <Experience />

        <div className='relative z-0'>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
