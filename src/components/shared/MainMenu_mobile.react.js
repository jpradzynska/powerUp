import React from 'react';
import NavLink from './NavLink.react';
import './MainMenu_mobile.scss';
// import cssmodules from 'react-css-modules';
// import styles from './MainMenu_mobile.scss';

// @cssmodules(styles)
class MainMenuMobile extends React.Component {

  render() {

    const mainMenuIcon = '\u2630';
    return (
      <header className="header">
        <div className="mainMenuBtn">
          {mainMenuIcon}
        </div>
        <div className="mainMenuContent">
          <nav>
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/games">Games</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </nav>
        </div>
      </header>
    );
  }
}

MainMenuMobile.displayName = 'SharedMainMenuMobile';
MainMenuMobile.propTypes = {};
MainMenuMobile.defaultProps = {};

export default MainMenuMobile;
