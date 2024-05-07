import React, { Component } from 'react'
import Newsitem from './Newsitem'



export default class News extends Component {
  
  render() {
    return (
      <div className='container my-3'>
        <h3 style={{color : 'red'}}>Top Headlines</h3>
      <div className='row'>
      <div className='col-md-4'>
       <Newsitem title='myTitle' descrption='myDescription'/>
      </div>
      <div className='col-md-4'>
       <Newsitem title='myTitle' descrption='myDescription'/>
      </div>
      <div className='col-md-4'>
       <Newsitem title='myTitle' descrption='myDescription'/>
      </div>
      </div>
      </div>
    )
  }
}


