import React from 'react';
import ButtonComponent from '../shared/ButtonComponent.react';
import LogoComponent from '../shared/LogoComponent.react';
import TrianglesTitleComponent from '../shared/TrianglesTitleComponent.react';
import './About.scss';
// import cssmodules from 'react-css-modules';
// import styles from './About.scss';

// @cssmodules(styles)
class About extends React.Component {

  render() {
    // write the title here
    const TRIANGLE_TITLE_1 = 'FACT SHEET';
    const TRIANGLE_TITLE_2 = 'OUR TEAM';
    const TRIANGLE_TITLE_3 = 'RELEASES';
    const BUTTON_HREF = '/games';
    const BUTTON_IMG = '../../images/about/cta-projects.svg';
    return (
      <div className="component about-component">
        <LogoComponent />
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
        <TrianglesTitleComponent titleText={TRIANGLE_TITLE_1}/>
        <TrianglesTitleComponent titleText={TRIANGLE_TITLE_2}/>
        <TrianglesTitleComponent titleText={TRIANGLE_TITLE_3}/>
        <ButtonComponent btnAddress={BUTTON_HREF} btnImg={BUTTON_IMG} />
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">SECTION bla blas bla</p>
        <p className="para1">22222222</p>
      </div>
    );
  }
}

About.displayName = 'AboutAbout';
About.propTypes = {};
About.defaultProps = {};

export default About;
