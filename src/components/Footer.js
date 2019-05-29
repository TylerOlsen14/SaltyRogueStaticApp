import React, { Component } from 'react'
import finn from '../assets/Finn.jpg'
import './stickyFooter/stickyFooter.css'

export class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footer">
          <img src={finn} alt="Captain Finn Web Design"/>
          <div className="CaptainFinn">
            <h3>Captain Finn <br/>Web Designs</h3>
          </div>
          <div className="contact">
            <h3>Contact:</h3>
            <div className="contactDetails phone">
              <h5>Phone: </h5>
              <p>(801) 661-9191</p>
            </div>
            <div className="contactDetails email">
              <h5>Email: </h5>
              <p>Tyler.Olsen1@gmail.com</p>
            </div>
            <div className="contactDetails github">
              <h5>GitHub: </h5>
              <p>https://github.com/TylerOlsen14</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
