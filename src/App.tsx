import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';

function App() {
  return (
    <div className="dark:bg-dark-1 text-light w-full py-4 font-raleway">
      <div className="container mx-auto dark:bg-dark-2 rounded-lg shadow-2xl shadow-dark-2/50">
        <header className='flex justify-center items-center mx-auto py-6'>
          <Navbar />
        </header>
        <main>
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
