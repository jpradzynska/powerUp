import React, { PropTypes } from 'react';
import NavLink from './shared/NavLink.react';
import './App.scss';
import diamondImg from '../images/power-up-diamond.svg';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="mainMenu">
        <h1>Power Up Web</h1>
        <ul>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><img src={diamondImg} alt="power-up diamond"/></li>
          <li><NavLink to="/games">Games</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.propTypes = {
  actions: React.PropTypes.object.isRequired,
  children: React.PropTypes.node
};

export default AppComponent;
