import React from 'react';
import './Contact.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Contact.scss';

// @cssmodules(styles)
class Contact extends React.Component {

  render() {
    return (
      <div className="component contact-component">
        <div>
          <img alt="Power Up Logo" src="../../images/power-up-logo.svg" />
        </div>
        <p>Contact</p>
        <div>
          <img alt="triangles" src="../../images/triangles-left.svg" />
          <p>INFO</p>
          <img alt="triangles" src="../../images/triangles-right.svg" />
        </div>
        <div>
          <p>Address:</p>
          <p>ul. Bora Komorowskiego 19B</p>
          <p>80-462 Gdańsk</p>
          <p>Poland</p>
          <p>Press / Business contact</p>
          <p>contact@powerupgamestudio.com</p>
          <img alt="e-mail button" src="../../images/contact/cta-email.svg" />
        </div>
      </div>
    );
  }
}

Contact.displayName = 'ContactContact';
Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;
