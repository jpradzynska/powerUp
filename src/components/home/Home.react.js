import React from 'react';
// import cssmodules from 'react-css-modules';
// import styles from './Home.scss';

// @cssmodules(styles)
class Home extends React.Component {

  render() {
    return (
      <div className="home-component" styleName="home-component">
        HOME PAGE! :)
      </div>
    );
  }
}

Home.displayName = 'HomeHome';
Home.propTypes = {};
Home.defaultProps = {};

export default Home;
