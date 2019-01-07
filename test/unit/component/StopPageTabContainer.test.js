import { expect } from 'chai';
import { describe, it } from 'mocha';
import React from 'react';

import { shallowWithIntl } from '../helpers/mock-intl-enzyme';
import { Component as StopPageTabContainer } from '../../../app/component/StopPageTabContainer';

describe('<StopPageTabContainer />', () => {
  it('should render the disruptions tab for stops', () => {
    const props = {
      breakpoint: 'large',
      children: <div />,
      location: {
        pathname: 'foobar',
      },
      params: {
        stopId: 'HSL:2211275',
      },
      routes: [],
    };
    const wrapper = shallowWithIntl(<StopPageTabContainer {...props} />);
    expect(wrapper.find('.stop-tab-singletab')).to.have.lengthOf(4);
    expect(
      wrapper
        .find('.stop-tab-singletab')
        .at(3)
        .props().to,
    ).to.contain('/hairiot');
  });

  it('should not render the disruptions tab for terminals', () => {
    const props = {
      breakpoint: 'large',
      children: <div />,
      location: {
        pathname: 'foobar',
      },
      params: {
        terminalId: 'HSL:2211275',
      },
      routes: [],
    };
    const wrapper = shallowWithIntl(<StopPageTabContainer {...props} />);
    expect(wrapper.find('.stop-tab-singletab')).to.have.lengthOf(3);
  });
});
