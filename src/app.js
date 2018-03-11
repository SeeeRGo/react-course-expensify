import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import getVisibleExpenses from './selectors/expenses'
import {addExpense, editExpense, removeExpense} from './actions/expenses'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters'

const store = configureStore()

const jsx = (
		<Provider store={store}>
			<AppRouter/>
		</Provider>
	)

ReactDOM.render(jsx, document.getElementById("app"))
