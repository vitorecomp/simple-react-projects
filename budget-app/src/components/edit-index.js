import React from 'react'

import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses.actions'

import ExpenseForm from './expense-form'

const EditPage = (props) => (
	<div>
		<ExpenseForm
			expense={props.expense}
			onSubmit={(expense) => {
				props.dispatch(editExpense(props.match.params.id, expense))
				props.history.push('/')
			}}
		/>
		<button onClick={(e) => {
			props.dispatch(removeExpense(props.match.params.id))
			props.history.push('/')
		}}>
			Remove
		</button>
	</div>
)

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	}
}

export default connect(mapStateToProps)(EditPage)