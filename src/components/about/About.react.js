import React from 'react';
import ButtonComponent from '../shared/ButtonComponent.react';
import LogoComponent from '../shared/LogoComponent.react';
import TeamMemberComponent from '../shared/TeamMemberComponent.react';
import TrianglesTitleComponent from '../shared/TrianglesTitleComponent.react';
import './About.scss';
// import cssmodules from 'react-css-modules';
// import styles from './About.scss';

// @cssmodules(styles)
class About extends React.Component {

  render() {
    // write the title here
    const TRIANGLE_TITLE_1 = 'FACT SHEET';
    const TRIANGLE_TITLE_2 = 'OUR TEAM';
    const TRIANGLE_TITLE_3 = 'RELEASES';
    const BUTTON_HREF = '/games';
    const BUTTON_IMG = '../../images/about/cta-projects.svg';
    const person1 = {
      imgSrc: '../../images/about/portrait-patryk.svg',
      name: 'Patryk',
      text: 'Developer, game designer'
    };
    const person2 = {
      imgSrc: '../../images/about/portrait-konrad.svg',
      name: 'Konrad',
      text: 'Promo-man, graphic designer'
    };
    const person3 = {
      imgSrc: '../../images/about/portrait-klaudia.svg',
      name: 'Klaudia',
      text: 'Game/graphic designer'
    };
    return (
      <div className="component about-component">
        <LogoComponent />
        <TrianglesTitleComponent titleText={TRIANGLE_TITLE_1}/>
        <TrianglesTitleComponent titleText={TRIANGLE_TITLE_2}/>
        <div className="team">
          <TeamMemberComponent data={person1} />
          <TeamMemberComponent data={person2} />
          <TeamMemberComponent data={person3} />
        </div>
        <TrianglesTitleComponent titleText={TRIANGLE_TITLE_3}/>
        <ButtonComponent btnAddress={BUTTON_HREF} btnImg={BUTTON_IMG} />
      </div>
    );
  }
}

About.displayName = 'AboutAbout';
About.propTypes = {};
About.defaultProps = {};

export default About;
