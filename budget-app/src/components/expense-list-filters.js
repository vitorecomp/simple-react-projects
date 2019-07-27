import React from 'react'
import { connect } from 'react-redux'

import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate
} from '../actions/filters.action'




class ExpenseListFilter extends React.Component {
	state = {
		calendarFocus: null,
	}

	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate))
		this.props.dispatch(setEndDate(endDate))
	}

	onFocusChange = (calendarFocus) => {
		this.setState(() => ({ calendarFocus }))
	}
	render() {
		return (<div>
			<input type="text" value={this.props.filters.text} onChange={(e) => {
				props.dispatch(setTextFilter(e.target.value));
			}} />

			<select onChange={(e) => {
				switch (e.target.value) {
					case 'date':
						this.props.dispatch(sortByDate())
					case 'amount':
						this.props.dispatch(sortByAmount())
				}
			}}>
				<option value='date'>Date</option>
				<option value='amount'>Amount</option>
			</select>
			<DateRangePicker
				isOutsideRange={() => false}
				numberOfMonths={1}

				startDate={this.props.filters.startDate}
				startDateId="start-filter-date"
				endDate={this.props.filters.endDate}
				endDateId="end-filter-date"

				onDatesChange={this.onDatesChange}

				focusedInput={this.state.calendarFocus}
				onFocusChange={this.onFocusChange}

				showClearDates={true}
			/>
		</div>)
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
}

export default connect(mapStateToProps)(ExpenseListFilter)