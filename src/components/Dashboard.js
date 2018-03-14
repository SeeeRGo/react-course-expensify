import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListHeader from './ExpenseListHeader'
import ExpenseListFilters from './ExpenseListFilters'

const Dashboard = () => (
	<div>
		<ExpenseListHeader />
		<ExpenseListFilters/>
		<ExpenseList/>
	</div>
)

export default Dashboard