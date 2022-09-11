import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from './components/Navbar1';
import Carousel1 from './components/Carousel1';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Prints from './components/Prints';

function App() {
  return (
    <div className="App">
      <BasicExample></BasicExample>
      <Routes>
        <Route path='/' element={<><Carousel1/></>}/>
        <Route path='/print' element={<Prints />}/>
      </Routes>

      
      
    </div>
  );
}

export default App;
