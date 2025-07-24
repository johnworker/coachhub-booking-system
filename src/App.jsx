import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Trainers from './components/Trainers';
import Programs from './components/Programs';
import Booking from './components/Booking';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

