import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import ProjectsList from "./Projects/ProjectsList"
import About from './About/About';
import Education from './Education/Education';

function App() {
  return (
    <div className="dark:bg-dark-1 text-light w-full py-4 font-raleway overflow-hidden">
      <div className="container mx-auto dark:bg-dark-2 rounded-lg shadow-2xl shadow-secondary-2/50">
        <header className='flex justify-center items-center mx-auto py-7 bg-secondary-1 text-2xl rounded-t-lg'>
          <Navbar />
        </header>
        <main>
          <Home />
          <About />
          <Education />
          <ProjectsList />
        </main>

      </div>
    </div>
  );
}

export default App;
