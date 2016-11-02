import React from 'react';
import NavLink from './NavLink.react';
import './MainMenu_mobile.scss';
// import cssmodules from 'react-css-modules';
// import styles from './MainMenu_mobile.scss';

// @cssmodules(styles)
class MainMenuMobile extends React.Component {

  render() {
    return (
      <header className="header">
        <nav>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/games">Games</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </nav>
      </header>
    );
  }
}

MainMenuMobile.displayName = 'SharedMainMenuMobile';
MainMenuMobile.propTypes = {};
MainMenuMobile.defaultProps = {};

export default MainMenuMobile;
