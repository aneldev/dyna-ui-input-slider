import "jest";

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import * as React from 'react';
import * as enzyme from 'enzyme';

import {DynaInputSlider} from '../../src';

describe('Home', () => {
  let wrapper;

  it('has expected content with deep render', () => {
    wrapper = enzyme.shallow(
      (
        <DynaInputSlider
          name="power"
          min={0}
          max={100}
          value={50}
          onChange={() => undefined}
        />
      ),
      {}
    );

    expect(wrapper).toMatchSnapshot();
  });
});
