import React from 'react';
import MainMenuPc from './shared/MainMenu_PC.react';
import MainMenuMobile from './shared/MainMenu_mobile.react';
import './App.scss';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <MainMenuPc />
        <MainMenuMobile />
        {this.props.children}
        <footer className="footer">
          Copyright&nbsp;&copy;&nbsp;2016 Power&nbsp;Up&nbsp;Game&nbsp;Studio
        </footer>
      </div>
    );
  }
}

AppComponent.propTypes = {
  actions: React.PropTypes.object.isRequired,
  children: React.PropTypes.node
};

export default AppComponent;
