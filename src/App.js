import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from './components/Navbar1'; 
import Carousel1 from './components/Carousel1';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Prints from './components/Prints';
import Cards1 from './components/Cards1';
import ArtSupplies from './components/ArtSupplies';
import Books1 from './components/Books1';
import Colaborations from './components/Colaborations';
import AboutH from './components/AboutH';
import Shipping from './components/Shipping';

function App() {
  return (
    <div className="App">
      <BasicExample></BasicExample>
      <Routes>
        <Route path='/' element={<><Carousel1/><br></br><Cards1/></>}/>
        <Route path='/print' element={<Prints />}/>
        <Route path='/artsupplies' element={<ArtSupplies />}/>
        <Route path='/books' element={<Books1 />}/>
        <Route path='/colaborations' element={<Colaborations />}/>
        <Route path='/abouth' element={<AboutH />}/>
        <Route path='/shipping' element={<Shipping />}/>
      </Routes>

      
      
    </div>
  );
}

export default App;
