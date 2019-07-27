import React from 'react'


import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses.actions'

import ExpenseForm from './expense-form'


const CreatePage = (props) => (
	<div>
		<h1>Create Page</h1>
		<ExpenseForm
			onSubmit={(expense) => {
				props.dispatch(addExpense(expense))
				props.history.push('/')
			}}
		/>
	</div>

)

export default connect()(CreatePage);