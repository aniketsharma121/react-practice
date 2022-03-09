import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes,Switch} from "react-router-dom";
import bootstrap from 'bootstrap';
import Header from './Components/RouterCom/Header';
import Contact from './Components/RouterCom/Contact';
import About from './Components/RouterCom/About';
import Home from './Components/RouterCom/Home';



class App extends React.Component
{
  render()
  {
    return(
      <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/about" element={<About/>} /> 
          <Route path='contact' element={<Contact/>}/>
        </Routes>
        
        </>
         

    )
  }
}
export default App;
