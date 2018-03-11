import React from 'react'
import { shallow } from 'enzyme'

import ExpenseDashboard from '../../components/Dashboard'

test('should render ExpenseDashboard correctly', () => {
  const wrapper = shallow(<ExpenseDashboard />)
  expect(wrapper).toMatchSnapshot()
});