import React from 'react';
import './Home.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Home.scss';

// @cssmodules(styles)
class Home extends React.Component {

  render() {
    return (
      <div className="home-component" styleName="home-component">
        HOME PAGE! :)<br />
        HOME PAGE! :)<br />
        HOME PAGE! :)<br />
        HOME PAGE! :)<br />
        HOME PAGE! :)<br />
        HOME PAGE! :)<br />
        HOME PAGE! :)<br />
        HOME PAGE! :)<br />
        HOME PAGE! :)<br />
      </div>
    );
  }
}

Home.displayName = 'HomeHome';
Home.propTypes = {};
Home.defaultProps = {};

export default Home;
