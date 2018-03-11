import React from 'react'
import {Link} from 'react-router-dom'

const PortfolioPage = () => {
	const portfolioItems = [1,3,5]
	return (
		<div>
			<h1>Portfolio Page</h1>
			{ portfolioItems.map((item, id) => {
				return (<Link key={id} to={`/portfolio/${id}`}>Item {id}</Link>)
			})}
		</div>
	)
}

export default PortfolioPage