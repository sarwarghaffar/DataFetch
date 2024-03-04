import React, { Component } from 'react'
import loader from './loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loader}/>
      </div>
    )
  }
}

export default Spinner
