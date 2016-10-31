import React, { PropTypes } from 'react';
import NavLink from './shared/NavLink.react';
import './App.scss';
import diamondImg from '../images/power-up-diamond.svg';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <div className="leftMainMenu">
            <nav>
              <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </nav>
          </div>

          <div className="diamongMenuIcon">
            <img src={diamondImg} alt="power-up diamond"/>
          </div>

          <div className="rightMainMenu">
            <nav>
              <li><NavLink to="/games">Games</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </nav>
          </div>
        </header>
        {this.props.children}
        <footer className="footer">
          Copyright&nbsp;&copy;&nbsp;2016 Power&nbsp;Up&nbsp;Game&nbsp;Studio
        </footer>
      </div>
    );
  }
}

AppComponent.propTypes = {
  actions: React.PropTypes.object.isRequired,
  children: React.PropTypes.node
};

export default AppComponent;
