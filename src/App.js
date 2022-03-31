import React from 'react';
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Book from './components/Book';
import View from './components/View';


function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Destinations/>
     <Book/>
     <View/>
    </div>
  );
}

export default App;
