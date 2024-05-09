import  './App.css'

import React, { Component } from 'react'
import News from './Components/News'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      < Navbar/>
      <Routes>
      <Route exact path='/about' element={<News key="about" pageSize ={6} country = "in" category = "about"/>} />
      <Route exact path='/entertainment' element={<News key="entertainment" pageSize ={6} country = "in" category = "entertainment"/>} />
      <Route exact path='/Business' element={<News key="about" pageSize ={6} country = "in" category = "Business"/>} />
      <Route exact path='/general' element={<News key="general" pageSize ={6} country = "in" category = "general"/>} />
      <Route exact path='/health' element={<News key="health" pageSize ={6} country = "in" category = "health"/>} />
      <Route exact path='/science' element={<News key="science" pageSize ={6} country = "in" category = "science"/>} />
      <Route exact path='/sports' element={<News key="sports" pageSize ={6} country = "in" category = "sports"/>} />
      <Route exact path='/technology' element={<News key="technology" pageSize ={6} country = "in" category = "technology"/>} />
      
      
        </Routes> 
      </Router>
      
     
     
        
        
       </>
        
        
      
    )
  }
}
