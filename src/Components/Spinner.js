import React, { Component } from 'react'
import loading from './loader.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loading} style={{height : 60,width : 60,color : "red"}} alt="loading"/> 
      </div>
    )
  }
}


