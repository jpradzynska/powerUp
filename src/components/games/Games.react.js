import React from 'react';
import ButtonComponent from '../shared/ButtonComponent.react';
import LogoComponent from '../shared/LogoComponent.react';
import TrianglesTitleComponent from '../shared/TrianglesTitleComponent.react';
import './Games.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Games.scss';

// @cssmodules(styles)
class Games extends React.Component {

  render() {
    // write the title here
    const TRIANGLE_TITLE_1 = 'JUMPING JOE!';
    const TRIANGLE_TITLE_2 = 'ORBITRON ARCADE';
    const TRIANGLE_TITLE_3 = 'CONTACT';
    const BUTTON_HREF = '/contact';
    const BUTTON_IMG = '../../images/games/cta-contact.svg';
    return (
      <div className="component games-component">
        <LogoComponent />
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <br />
        <TrianglesTitleComponent titleText={TRIANGLE_TITLE_1}/>
        <br />
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <br />
        <TrianglesTitleComponent titleText={TRIANGLE_TITLE_2}/>
        <br />
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <br />
        <TrianglesTitleComponent titleText={TRIANGLE_TITLE_3}/>
        <ButtonComponent btnAddress={BUTTON_HREF} btnImg={BUTTON_IMG} />
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
        <p className="para1">Lorem Ipsum</p>
      </div>
    );
  }
}

Games.displayName = 'GamesGames';
Games.propTypes = {};
Games.defaultProps = {};

export default Games;
