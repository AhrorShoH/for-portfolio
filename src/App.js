import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
import Blog from './blog/Blog';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from "./contact/Contact";
import { Route } from 'react-router';
import {Routes} from 'react-router-dom';



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
      <Contact/>
    </div>
  );
}

export default App;
