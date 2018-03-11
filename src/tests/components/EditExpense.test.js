import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let removeExpense, editExpense, history, wrapper
beforeEach(() => {
  removeExpense = jest.fn()
  editExpense = jest.fn()
  history = {push: jest.fn()}
  wrapper = shallow(<EditExpensePage
    editExpense={editExpense} history={history} removeExpense={removeExpense} expense={expenses[2]} />)
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})
test('should call EditExpense and history', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
})
test('should call removeExpense and history', () => {
  wrapper.find('button').simulate('click')
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[2].id)
  expect(history.push).toHaveBeenLastCalledWith('/')
})