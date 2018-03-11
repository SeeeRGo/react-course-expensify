import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('sould set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by wrong id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Vrum',
      note: '',
      amount: 1000,
      createdAt: 2900
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense])
})

test('should edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      amount: 999,
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[2].amount).toEqual(999)
})

test('should not edit expense with wrong id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount: 999,
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})