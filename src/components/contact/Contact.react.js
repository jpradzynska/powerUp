import React from 'react';
import './Contact.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Contact.scss';

// @cssmodules(styles)
class Contact extends React.Component {

  render() {
    return (
      <div className="contact-component" styleName="contact-component">
        CONTACT SECTION
      </div>
    );
  }
}

Contact.displayName = 'ContactContact';
Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;
