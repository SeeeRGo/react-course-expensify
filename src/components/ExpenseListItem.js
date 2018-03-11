import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

export const ExpenseListItem = (props) => (
	<div>
		<Link to={`/edit/${props.id}`}>
			<p>{props.description}</p>
		</Link>
		<p>{props.amount}</p>
		<p>{props.createdAt}</p>
	</div>
)

export default connect()(ExpenseListItem)