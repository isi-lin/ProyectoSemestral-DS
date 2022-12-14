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
import Cards2 from './components/Colaborations';
import AboutH from './components/AboutH';
import Shipping from './components/Shipping';
import HomeCard1 from './components/HomeCard1';
import Footer1 from './components/Footer1';
import Colabcard1 from './components/Colabcard1';
import { ShoppingCartProvider } from './components/ShoppingCartContext.tsx';



function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
      <BasicExample></BasicExample>
      <Routes>
        <Route path='/' element={<><Carousel1/><br></br><HomeCard1></HomeCard1><Cards1/></>}/>
        <Route path='/prints' element={<Prints />}/>
        <Route path='/artsupplies' element={<ArtSupplies />}/>
        <Route path='/books' element={<Books1 />}/>
        <Route path='/colaborations' element={<><Colabcard1/><br></br><Cards2/></>}/>
        <Route path='/abouth' element={<AboutH />}/>
        <Route path='/shipping' element={<Shipping />}/>
      </Routes>
      <Footer1></Footer1>
      </ShoppingCartProvider>

      
      
    </div>
  );
}

export default App;
