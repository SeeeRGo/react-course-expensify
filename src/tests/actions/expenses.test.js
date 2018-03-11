import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
	const action = removeExpense('123abc')
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	})
})

test('should setup edit expense action object', () => {
	const action = editExpense('123abc', {note: 'bnbnb'})
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc', 
		updates: {note: 'bnbnb'}
	})
})

test('should setup add expense action object', () => {
	const expense = {
		description: 'description', 
		note:'note', 
		amount: 43430, 
		createdAt: 9808970
	}
	const action = addExpense(expense)
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expense,
			id: expect.any(String)
		}
	})
})
test('should setup default add expense action object', () => {
	const expense = {
		description: '', 
		note:'', 
		amount: 0, 
		createdAt: 0
	}
	const action = addExpense()
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expense,
			id: expect.any(String)
		}
	})
})