const expensesReducerDefaultState = []
export default (state = expensesReducerDefaultState, action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			]
		case 'REMOVE_EXPENSE':
			return state.filter((expense) => expense.id !== action.id)
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				return expense.id !== action.id ? expense : 
				{
					...expense,
					...action.updates
				}
			})
		case 'SET_EXPENSES':
			return action.expenses
		default:
			return state
	}
}