import filterReducer from '../../src/reducers/filters.reducer'
import moment from 'moment'



test('should setup default filter values', () => {
	const state = filterReducer(undefined, { type: '@@INIT' })
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	})
})

test('should set sortBy to amount', () => {
	const state = filterReducer(undefined, {
		type: 'SORT_BY_AMOUNT', filter: {
			sortBy: 'amount'
		}
	})
	expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	}
	const state = filterReducer(currentState, {
		type: 'SORT_BY_DATE', filter: {
			sortBy: 'date'
		}
	})
	expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
	const state = filterReducer(undefined, {
		type: 'SET_TEXT_FILTER', filter: {
			text: 'valor'
		}
	})
	expect(state.text).toBe('valor')
})

test('should set start date filter', () => {
	const date = moment(0)
	const state = filterReducer(undefined, {
		type: 'SET_START_DATE', filter: {
			startDate: date

		}
	})
	expect(state.startDate).toEqual(date)
})


test('should set end date filter', () => {
	const date = moment(0)
	const state = filterReducer(undefined, {
		type: 'SET_END_DATE', filter: {
			endDate: date
		}
	})
	expect(state.endDate).toEqual(date)
})