import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
import Blog from './blog/Blog';
import { Route } from 'react-router';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import {Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Main/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
