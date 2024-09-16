import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
