import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { addExpense, editExpense, removeExpense, startAddExpense,
	setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
	const expensesData = {}
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = { id, description, note, amount, createdAt }
	})
	database.ref('expenses').set(expensesData).then(() => done())
})
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
	const action = addExpense(expenses[2])
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	})
})

test('should add expense to database and store', (done) => {
	const store = createMockStore({})
	const expenseData = {
		description: 'Mouse',
		amount: 3000,
		note: 'This is better',
		createdAt: 1000
	}

	store.dispatch(startAddExpense(expenseData))
		.then(() => {
			const actions = store.getActions()
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseData
				}			
			})

			return database.ref(`expenses/${actions[0].expense.id}`).once('value')				
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseData)
			done()
		})	
})

test('should add expense to database and store with default values', (done) => {
	const store = createMockStore({})
	const defaultExpenseData = {
		description: '',
		amount: 0,
		note: '',
		createdAt: 0
	}

	store.dispatch(startAddExpense())
		.then(() => {
			const actions = store.getActions()
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...defaultExpenseData
				}			
			})

			return database.ref(`expenses/${actions[0].expense.id}`).once('value')				
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(defaultExpenseData)
			done()
		})	
})

test('should setup set expense action object with data', () => {
	const action = setExpenses(expenses)
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	})
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({})
  store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		})
		done()
	})
})

test('should remove expense from firebase', (done) => {
	const store = createMockStore(expenses)
	store.dispatch(startRemoveExpense(expenses[1].id)).then(() => {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: 'REMOVE_EXPENSE',
			id: expenses[1].id
		})
		database.ref(`expenses/${expenses[1].id}`).once('value').then((snapshot) => {
			expect(snapshot.val()).toBe(null)
			done()
		})
	})
})

test('should edit expense in firebase', (done) => {
	const store = createMockStore(expenses)
	const updates = { amount: 9999 }
	store.dispatch(startEditExpense(expenses[1].id, updates)).then(() => {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: 'EDIT_EXPENSE',
			id: expenses[1].id,
			updates
		})
		database.ref(`expenses/${expenses[1].id}`).once('value').then((snapshot) => {
			expect(snapshot.val()).toEqual({
				...expenses[1],
				...updates
			})
			done()
		})
	})
})
