import React from 'react';
// import cssmodules from 'react-css-modules';
// import styles from './Releases.scss';

// @cssmodules(styles)
class Releases extends React.Component {

  render() {
    return (
      <div className="releases-component" styleName="releases-component">
        RELEASES SECTION
      </div>
    );
  }
}

Releases.displayName = 'ReleasesReleases';
Releases.propTypes = {};
Releases.defaultProps = {};

export default Releases;
