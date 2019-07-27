import React from 'react'
import { connect } from 'react-redux'

import Expense from './expense-item'

import { getVisibleExpenses } from '../selectors/expenses.selectors'

export const ExpenseList = ({ expenses }) => {
	return <div>
		{expenses.length > 0 ?
			expenses.map((e, id) => <Expense key={id} {...e} />) :
			<p>No expenses, please add one!</p>}
	</div>
}
const mapStateProps = (state) => {
	return {
		expenses: getVisibleExpenses(state.expenses, state.filters)
	}
}
export default connect(mapStateProps)(ExpenseList);
