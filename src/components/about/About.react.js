import React from 'react';
// import cssmodules from 'react-css-modules';
// import styles from './About.scss';

// @cssmodules(styles)
class About extends React.Component {

  render() {
    return (
      <div className="about-component" styleName="about-component">
        ABOUT SECTION
      </div>
    );
  }
}

About.displayName = 'AboutAbout';
About.propTypes = {};
About.defaultProps = {};

export default About;
