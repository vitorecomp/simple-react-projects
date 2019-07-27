import moment from 'moment'

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
}
export default (state = filtersReducerDefaultState, { type, filter }) => {
	switch (type) {
		case 'SET_TEXT_FILTER':
		case 'SORT_BY_AMOUNT':
		case 'SORT_BY_DATE':
		case 'SET_START_DATE':
		case 'SET_END_DATE':
			return {
				...state,
				...filter
			}
		default:
			return state
	}
}
