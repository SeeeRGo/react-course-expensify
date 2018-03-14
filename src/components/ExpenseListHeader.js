import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses.js'
import selectExpensesTotal from '../selectors/expenses-total.js'

export const ExpenseListHeader = (props) => (
  <div>
  {
    props.expenses.length !== 0 &&
    <p>
      {`You are viewing ${props.expenses.length} ${props.expenses.length === 1 ? 'expense' : 'expenses'}\n`}
      {`for total of ${numeral(selectExpensesTotal(props.expenses)).format('$0,0.00')}`}
    </p>
  }
	</div>
)

const mapStateToProps = (state) => {
	return {
    expenses: selectExpenses(state.expenses, state.filters)
	}
}
export default  connect(mapStateToProps)(ExpenseListHeader)