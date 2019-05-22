import React, { Component } from 'react'
import finn from '../assets/Finn.jpg'

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img src={finn} alt="Captain Finn Web Design"/>
      </div>
    )
  }
}

export default Footer
