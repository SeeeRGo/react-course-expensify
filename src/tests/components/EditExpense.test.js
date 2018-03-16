import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startRemoveExpense, startEditExpense, history, wrapper
beforeEach(() => {
  startRemoveExpense = jest.fn()
  startEditExpense = jest.fn()
  history = {push: jest.fn()}
  wrapper = shallow(<EditExpensePage
    startEditExpense={startEditExpense} history={history} startRemoveExpense={startRemoveExpense} expense={expenses[2]} />)
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})
test('should call startEditExpense and history', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
})
test('should call startRemoveExpense and history', () => {
  wrapper.find('button').simulate('click')
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id)
  expect(history.push).toHaveBeenLastCalledWith('/')
})