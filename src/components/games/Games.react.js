import React from 'react';
import './Games.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Games.scss';

// @cssmodules(styles)
class Games extends React.Component {

  render() {
    return (
      <div className="games-component" styleName="games-component">
        GAMES SECTION<br />
        GAMES SECTION<br />
        GAMES SECTION<br />
        GAMES SECTION<br />
        GAMES SECTION<br />
        GAMES SECTION<br />
        GAMES SECTION<br />
      </div>
    );
  }
}

Games.displayName = 'GamesGames';
Games.propTypes = {};
Games.defaultProps = {};

export default Games;
