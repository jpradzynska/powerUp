import React from 'react';
import ButtonComponent from '../shared/ButtonComponent.react';
import HeaderComponent from '../shared/HeaderComponent.react';
import LogoComponent from '../shared/LogoComponent.react';
import './Home.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Home.scss';

// @cssmodules(styles)
class Home extends React.Component {

  render() {
    const BUTTON_HREF = '/games';
    const BUTTON_IMG = '../../images/home/cta-projects.svg';
    const HEADER_TEXT_1 = 'Pixel based lifeforms';
    const HEADER_TEXT_2 = 'Presented by';
    return (
      <div className="component home-component">
        <HeaderComponent headerText={HEADER_TEXT_1} />
        <HeaderComponent headerText={HEADER_TEXT_2} />
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
