import React, { PropTypes } from 'react';
import NavLink from './shared/NavLink.react';
// import './App.scss';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/releases">Releases</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

// AppComponent.defaultProps = {
// };

AppComponent.propTypes = {
  actions: PropTypes.object.isRequired
};

export default AppComponent;
