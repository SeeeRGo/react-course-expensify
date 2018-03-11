import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './../components/Header'
import PortfolioPage from './../components/PortfolioPage'
import Dashboard from './../components/Dashboard'
import PortfolioItemPage from './../components/PortfolioItemPage'
import ContactPage from './../components/ContactPage'
import NotFoundPage from './../components/NotFoundPage'

const PortfolioRouter = () => (
	<BrowserRouter>
		<div>
			<Header/>
			<Switch>
			<Route path="/" component={Dashboard} exact={true}/>
			<Route path="/portfolio" component={PortfolioPage} exact={true}/>
			<Route path="/portfolio/:id" component={PortfolioItemPage}/>
			<Route path="/contact" component={ContactPage}/>
			<Route component={NotFoundPage}/>
			</Switch>
		</div>		
	</BrowserRouter>
	)

export default PortfolioRouter
