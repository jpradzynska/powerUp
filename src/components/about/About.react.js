import React from 'react';
import './About.scss';
// import cssmodules from 'react-css-modules';
// import styles from './About.scss';

// @cssmodules(styles)
class About extends React.Component {

  render() {
    return (
      <div className="about-component" styleName="about-component">
        ABOUT SECTION bla blas bla
      </div>
    );
  }
}

About.displayName = 'AboutAbout';
About.propTypes = {};
About.defaultProps = {};

export default About;
