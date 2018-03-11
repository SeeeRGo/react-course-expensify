import  { createStore, combineReducers} from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = (
	{ 
		description = '', 
		note ='', 
		amount = 0, 
		createdAt = 0
	} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt

	}
})
// REMOVE_EXPENCE
const removeExpense = (id = undefined) => ({
	type: 'REMOVE_EXPENSE',
	id
})
// EDIT_EXPENSE
const editExpense = (id, updates = {}) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})
// SET_TEXT_FILTER
const setTextFilter = (text) => ({
	type: 'SET_TEXT_FILTER',
	text
})
// SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
})
// SET_START_DATE
const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
})


const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch(action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			}
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			}
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			}
		default:
			return state
	}
}



const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
)

store.subscribe(() => {
	const state = store.getState()
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
	console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300}))
store.dispatch(removeExpense(expenseTwo.expense.id))
store.dispatch(editExpense(expenseOne.expense.id, {amount: 500}))
store.dispatch(setTextFilter('rent'))
const demoState = {
	expenses: [{
		id: 'trurugjhgffh',
		description: 'January Rent',
		note: 'This was the final payment for that address',
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	}
}