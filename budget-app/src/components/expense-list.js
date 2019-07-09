import React from 'react'
import { connect } from 'react-redux'

import Expense from './expense-item'
import ExpenseFilter from './expense-list-filters'

import { getVisibleExpenses } from '../selectors/expenses.selectors'

const ExpenseList = ({ expenses, filters }) => {
	const selectExpenses = getVisibleExpenses(expenses, filters)
	return <div>
		<ExpenseFilter />
		<h2> Expense List </h2>
		{selectExpenses.length > 0 ?
			selectExpenses.map((e, id) => <Expense key={id} {...e} />) :
			<p>No expenses, please add one!</p>}
	</div>
}
const mapStateProps = (state) => {
	return {
		expenses: state.expenses,
		filters: state.filters
	}
}
export default connect(mapStateProps)(ExpenseList);
