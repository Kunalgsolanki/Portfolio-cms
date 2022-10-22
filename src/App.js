import React from 'react'
import "./App.scss"


import {About, Footer , Header, Skills ,TestMonomials , Works } from "./container";
import {Navbar} from "./components"
const App = () => {
  return (
    <div className= "app">
        <Navbar/>
       <Header/>
       <About/>
       <Works/>
       <Skills/>
       <TestMonomials/>
       <Footer/>
      
    </div>
  )
}

export default App
