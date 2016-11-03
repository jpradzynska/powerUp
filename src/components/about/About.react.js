import React from 'react';
import ButtonComponent from '../shared/ButtonComponent.react';
import FactComponent from '../shared/FactComponent.react';
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
    const fact1 = {
      imgSrc: '../../images/about/icon-developer.svg',
      title: 'Developer'
    };
    const fact2 = {
      imgSrc: '../../images/about/icon-calendar.svg',
      title: 'Founding date'
    };
    const fact3 = {
      imgSrc: '../../images/about/icon-pad.svg',
      title: 'Platforms'
    };
    const fact4 = {
      imgSrc: '../../images/about/icon-8.svg',
      title: 'Realised projects'
    };
    return (
      <div className="component about-component">
        <LogoComponent />
        <TrianglesTitleComponent titleText={TRIANGLE_TITLE_1}/>
        <div className="facts">
          <FactComponent data={fact1}><span>Power UP Game Studio</span><br />Based in Gdańsk, Poland</FactComponent>
          <FactComponent data={fact2}>January 1, 2016</FactComponent>
          <FactComponent data={fact3} />
          <FactComponent data={fact4} />
        </div>
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
