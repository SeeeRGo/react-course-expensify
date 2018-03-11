import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
	)
const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>Private Info don't share</p>}
			<WrappedComponent {...props}/>
		</div>
	)
}
const requireAuthentication = (WrappedComponent) => {
	return (props) => (
	{props.auth && <WrappedComponent {...props}/>}
	)
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo auth={false} info="here"/>, document.getElementById('app'))