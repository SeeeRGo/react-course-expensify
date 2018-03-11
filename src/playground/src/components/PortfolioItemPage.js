import React from 'react'

const PortfolioItemPage = (props) => (
		<div>
			This is a portfolio item with id {props.match.params.id}
		</div>
	)

export default PortfolioItemPage