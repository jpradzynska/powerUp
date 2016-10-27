import React from 'react';
import { shallow } from 'enzyme';
import Releases from 'components/releases/Releases.react.js';

describe('<Releases />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Releases />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "releases-component"', () => {
      expect(component.hasClass('releases-component')).to.equal(true);
    });
  });
});
