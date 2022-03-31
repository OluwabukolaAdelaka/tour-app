import React from 'react';
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Book from './components/Book';
import View from './components/View';
import Carousel from './components/Carousel';


function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Destinations/>
     <Book/>
     <View/>
     <Carousel/>
    </div>
  );
}

export default App;
