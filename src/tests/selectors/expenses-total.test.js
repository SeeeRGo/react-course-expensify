import getTotalExpenses from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses given', () => {
  expect(getTotalExpenses()).toBe(0)
})

test('should return correct total if single expense given', () => {
  expect(getTotalExpenses([expenses[2]])).toBe(expenses[2].amount)
})

test('should return 0 if no expenses given', () => {
  expect(getTotalExpenses(expenses)).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount)
})