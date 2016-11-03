import React from 'react';
import ButtonComponent from '../shared/ButtonComponent.react';
import LogoComponent from '../shared/LogoComponent.react';
import './Home.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Home.scss';

// @cssmodules(styles)
class Home extends React.Component {

  render() {
    const BUTTON_HREF = '/games';
    const BUTTON_IMG = '../../images/home/cta-projects.svg';
    return (
      <div className="component home-component">
        <p className="para1">111111</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <LogoComponent />
        <ButtonComponent btnAddress={BUTTON_HREF} btnImg={BUTTON_IMG}/>
      </div>
    );
  }
}

Home.displayName = 'HomeHome';
Home.propTypes = {};
Home.defaultProps = {};

export default Home;
