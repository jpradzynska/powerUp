import React from 'react';
import './Contact.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Contact.scss';

// @cssmodules(styles)
class Contact extends React.Component {

  render() {
    return (
      <div className="component contact-component">
        <div className="section-logo">
          <img alt="Power Up Logo" src="../../images/power-up-logo.svg" />
        </div>

        <div className="section-contact">
          <p>Contact</p>
        </div>

        <div className="section-info">
          <img alt="triangles" className="img-left" src="../../images/triangles-left.svg" />
          <span>INFO</span>
          <img alt="triangles" className="img-right" src="../../images/triangles-left.svg" />
        </div>

        <div className="contact-address">
          <div className="address">
            <p><span>Address:</span></p>
            <p>ul. Bora Komorowskiego 19B</p>
            <p>80-462 Gdańsk</p>
            <p>Poland</p>
          </div>
          <div className="press">
            <p><span>Press / Business contact</span></p>
            <p>contact@powerupgamestudio.com</p>
            <br />
            <br />
          </div>
          <div className="email-btn">
            <a href="mailto:contact@powerupgamestudio.com" title="Contact us">
              <img alt="e-mail button" src="../../images/contact/cta-email.svg" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Contact.displayName = 'ContactContact';
Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;
