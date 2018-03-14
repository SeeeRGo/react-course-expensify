import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export const ExpenseListItem = (props) => (
	<div>
		<Link to={`/edit/${props.id}`}>
			<p>{props.description}</p>
		</Link>
		<p>
			{numeral(props.amount / 100).format('$0,0.00')}
			-
			{moment(props.createdAt).format('MMMM Do, YYYY')}
		</p>
	</div>
)

export default connect()(ExpenseListItem)