import React from 'react';
import './About.scss';
// import cssmodules from 'react-css-modules';
// import styles from './About.scss';

// @cssmodules(styles)
class About extends React.Component {

  render() {
    return (
      <div className="about-component" styleName="about-component">
        <p className="para1">ABOUT SECTION bla blas bla</p>
        <p className="para2">ABOUT SECTION bla blas bla</p>
        <p className="para3">ABOUT SECTION bla blas bla</p>
        <p className="para4">ABOUT SECTION bla blas bla</p>
      </div>
    );
  }
}

About.displayName = 'AboutAbout';
About.propTypes = {};
About.defaultProps = {};

export default About;
