export const setTextFilter = (text) => ({
	type: 'SET_TEXT_FILTER',
	filter: {
		text
	}
})

export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
	filter: {
		sortBy: 'amount'
	}
})

export const sortByDate = () => ({
	type: 'SORT_BY_DATE',
	filter: {
		sortBy: 'date'
	}
})

export const setStartDate = (startDate = null) => ({
	type: 'SET_START_DATE',
	filter: {
		startDate
	}
})

export const setEndDate = (endDate = null) => ({
	type: 'SET_END_DATE',
	filter: {
		endDate
	}
})
