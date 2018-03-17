import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses.js'
import selectExpensesTotal from '../selectors/expenses-total.js'

export const ExpenseListHeader = (props) => (
  <div className="page-header">
    <div className="content-container">
      {
        props.expenses.length !== 0 &&
        <h1 className="page-header__title">      
          You are viewing <span>{props.expenses.length}</span> {props.expenses.length === 1 ? 'expense ' : 'expenses '}
          totalling <span>{numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}</span>
        </h1>
      }
      <div className="page-header__actions">
        <Link className="button-main" to="/create">Add Expense</Link>
      </div>
    </div>
	</div>
)

const mapStateToProps = (state) => {
	return {
    expenses: selectExpenses(state.expenses, state.filters)
	}
}
export default  connect(mapStateToProps)(ExpenseListHeader)