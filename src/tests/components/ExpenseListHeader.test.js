import React from 'react'
import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'
import { shallow } from 'enzyme';
import { ExpenseListHeader } from '../../components/ExpenseListHeader';

test('should render ExpenseListHeader correctly', () => {
  const wrapper = shallow(<ExpenseListHeader expenses={expenses}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListHeader correctly', () => {
  const wrapper = shallow(<ExpenseListHeader expenses={[expenses[0]]}/>)
  expect(wrapper).toMatchSnapshot()
})