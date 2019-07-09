// Higher Order Component {HOC}
// Is a component thats is reponsavel por render another component

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>This is a info {props.info} </p>
	</div>
)

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p> This is a private info, pleas e don't share!</p>}
			<WrappedComponent {...props} />
		</div>
	)
}

//require auth
const requireAuth = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuth ? <WrappedComponent {...props} /> : <p> Please login </p>}
		</div>
	)
}


const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuth(Info)

ReactDOM.render(<AuthInfo isAuth={false} info="There are the details" />, document.getElementById('app'))