import React from 'react'
import { connect } from 'react-redux'


import {
	setTextFilter,
	sortByAmount,
	sortByDate
} from '../actions/filters.action'




const ExpenseListFilter = (props) => (
	<div>
		<input type="text" value={props.filters.text} onChange={(e) => {
			props.dispatch(setTextFilter(e.target.value));
		}} />
		<select onChange={(e) => {
			switch (e.target.value) {
				case 'date':
					props.dispatch(sortByDate())
				case 'amount':
					props.dispatch(sortByAmount())
			}
		}}>
			<option value='date'>Date</option>
			<option value='amount'>Amount</option>
		</select>
	</div>
)

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
}

export default connect(mapStateToProps)(ExpenseListFilter)