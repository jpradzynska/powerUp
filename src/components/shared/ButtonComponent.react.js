import React from 'react';
import './ButtonComponent.scss';
// import cssmodules from 'react-css-modules';
// import styles from './ButtonComponent.scss';

// @cssmodules(styles)
class ButtonComponent extends React.Component {

  render() {
    return (
      <div className="button-component">
        <a href={this.props.btnAddress} title="Contact us">
          <img alt="e-mail button" src={this.props.btnImg} />
        </a>
      </div>
    );
  }
}

ButtonComponent.displayName = 'SharedButtonComponent';
ButtonComponent.propTypes = {
  btnAddress: React.PropTypes.string.isRequired,
  btnImg: React.PropTypes.string.isRequired
};
ButtonComponent.defaultProps = {};

export default ButtonComponent;
