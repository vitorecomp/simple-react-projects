import React from 'react'

import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

const now = moment();
console.log(now.format('MMM Do, YYYY'))


export default class ExpenseForm extends React.Component {
	state = {
		description: '',
		note: '',
		amount: '',
		createdAt: moment(),
		calendarFocus: false
	}

	onDescriptionChange = (e) => {
		const description = e.target.value
		this.setState(() => ({
			description
		}))
	}

	onNoteChange = (e) => {
		const note = e.target.value
		this.setState(() => ({
			note
		}))
	}

	onAmountChange = (e) => {
		const amount = e.target.value
		if (amount.match(/^\d*(\.\d{0,  2})?$/)) {
			this.setState(() => ({
				amount
			}))
		}

	}

	onDateChange = (createdAt) => {
		this.setState({
			createdAt
		})
	}

	onFocusChange = ({ focused }) => {
		this.setState({
			calendarFocus: focused
		})
	}

	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>

					<input
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>

					<SingleDatePicker
						numberOfMonths={1}
						isOutsideRange={() => false}
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocus}
						onFocusChange={this.onFocusChange}
					/>

					<textarea
						placeholder="Add a note for your expense(Optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}