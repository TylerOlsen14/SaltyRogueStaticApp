import React, { Component } from "react";
import finn from "../assets/Finn.jpg";
import "./stickyFooter/stickyFooter.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footer">
          <div className="CaptainFinnContainer">
            <img src={finn} alt="Captain Finn Web Design" />
          {/* </div>
          <div className="ft-item">
            <div className="CaptainFinn"> */}
              <h3 className="CaptainFinn">
                Captain Finn <br />
                Web Designs
              </h3>
            {/* </div> */}
          </div>
          <div className="contactContainer">
              <h3>Contact:</h3>
            <div className="contact">
              <div className="contactType phone">
                {/* <h5>Phone: </h5> */}
                <i class="fas fa-phone-square"></i>
              </div>
              <div className="contentDetails">
                <p>(801) 661-9191</p>
              </div>
              <div className="contactType email">
                <i class="fas fa-envelope"></i>
                {/* <h5>Email: </h5> */}
                </div>
                <div className="contentDetails">
                <p>Tyler.Olsen1@gmail.com</p>
              </div>
              <div className="contactType github">
                <i class="fab fa-github"></i>
                {/* <h5>GitHub: </h5> */}
              </div>
              <div className="contentDetails">
                <p>https://github.com/TylerOlsen14</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
