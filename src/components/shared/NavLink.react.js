import React from 'react';
import { Link } from 'react-router';
// import cssmodules from 'react-css-modules';
// import styles from './NavLink.scss';

// @cssmodules(styles)
class NavLink extends React.Component {

  render() {
    return <Link {...this.props} activeClassName="active"/>;
  }
}

NavLink.displayName = 'SharedNavLink';
NavLink.propTypes = {};
NavLink.defaultProps = {};

export default NavLink;
