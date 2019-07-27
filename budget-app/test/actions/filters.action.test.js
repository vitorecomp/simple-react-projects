import {
	setStartDate,
	setEndDate,
	setTextFilter,
	sortByAmount,
	sortByDate
} from '../../src/actions/filters.action'
import moment from 'moment'

test('should setup setStartDate action object', () => {
	const action = setStartDate(moment(0))
	expect(action).toEqual({
		type: 'SET_START_DATE',
		filter: {
			startDate: moment(0)
		}
	})
})

test('should setup setEndDate action object', () => {
	const action = setEndDate(moment(0))
	expect(action).toEqual({
		type: 'SET_END_DATE',
		filter: {
			endDate: moment(0)
		}
	})
})

test('should setup setTextFilter action object', () => {
	const text = 'Somen'
	const action = setTextFilter(text)
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		filter: {
			text
		}
	})
})

test('should setup setTextFilter with default value', () => {
	const action = setTextFilter()
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		filter: {
			text: ''
		}
	})
})

test('should setup sort by amount with default value', () => {
	const action = sortByAmount()
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
		filter: {
			sortBy: 'amount'
		}
	})
})

test('should setup sort by date with default value', () => {
	const action = sortByDate()
	expect(action).toEqual({
		type: 'SORT_BY_DATE',
		filter: {
			sortBy: 'date'
		}
	})
})