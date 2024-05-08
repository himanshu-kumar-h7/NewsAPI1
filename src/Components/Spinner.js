import React, { Component } from 'react'
import loading from './src/loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="loading"> </img>
      </div>
    )
  }
}


