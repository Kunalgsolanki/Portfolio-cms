import React from 'react'
import "./App.scss"
import {About, Footer , Header, Skills ,Test , Works } from "./container";
import {Navbar} from "./components"
const App = () => {
  return (
    <div className= "app">
        <Navbar/>
       <Header/>
       <About/>
       <Works/>
       <Skills/>
       <Test/>
       <Footer/>
      
    </div>
  )
}

export default App
