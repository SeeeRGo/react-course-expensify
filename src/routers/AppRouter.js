import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Header from './../components/Header'
import EditExpensePage from './../components/EditExpensePage'
import Dashboard from './../components/Dashboard'
import AddExpensePage from './../components/AddExpensePage'
import HelpPage from './../components/HelpPage'
import NotFoundPage from './../components/NotFoundPage'
import Login from './../components/Login'
import PrivateRoute from './PrivateRoute';

export const history = createHistory()

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
			<Route path="/" component={Login} exact={true}/>
			<PrivateRoute path="/dashboard" component={Dashboard} exact={true}/>
			<PrivateRoute path="/create" component={AddExpensePage}/>
			<PrivateRoute path="/edit/:id" component={EditExpensePage}/>
			<Route path="/help" component={HelpPage}/>
			<Route component={NotFoundPage}/>
			</Switch>
		</div>		
	</Router>
	)

export default AppRouter
