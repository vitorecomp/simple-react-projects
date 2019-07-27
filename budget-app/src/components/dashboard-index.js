import React from 'react'

import ExpenseList from './expense-list'
import ExpenseFilter from './expense-list-filters'

const DashPage = () => (
	<div>
		<h1>Dash </h1>
		<div>
			<ExpenseFilter />
			<ExpenseList />
		</div>
	</div>
)

export default DashPage;