import React from 'react';
import EmailButtonComponent from '../shared/EmailButtonComponent.react';
import LogoComponent from '../shared/LogoComponent.react';
import TrianglesTitleComponent from '../shared/TrianglesTitleComponent.react';
import './Contact.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Contact.scss';

// @cssmodules(styles)
class Contact extends React.Component {

  render() {
    // write the title here
    const TRIANGLE_TITLE = 'INFO';
    const BUTTON_HREF = 'mailto:contact@powerupgamestudio.com';
    const BUTTON_IMG = '../../images/contact/cta-email.svg';
    return (
      <div className="component contact-component">
        <LogoComponent />

        <div className="section-contact">
          <p>Contact</p>
        </div>

        <TrianglesTitleComponent titleText={TRIANGLE_TITLE} />

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
          </div>
          <EmailButtonComponent btnAddress={BUTTON_HREF} btnImg={BUTTON_IMG} />
        </div>
      </div>
    );
  }
}

Contact.displayName = 'ContactContact';
Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;
