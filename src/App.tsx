import React from 'react';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </header>
      <h1 className="text-6xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
