import React from 'react';
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Book from './components/Book';


function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Destinations/>
     <Book/>
    </div>
  );
}

export default App;
