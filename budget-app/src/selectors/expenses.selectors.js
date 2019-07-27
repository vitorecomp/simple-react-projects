import moment from 'moment'

export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const createdAtMoment = moment(expense.createdAt)
		const startDateMatch = !startDate || startDate.isSameOrBefore(createdAtMoment, 'day')
		const endDateMatch = !endDate || endDate.isSameOrAfter(createdAtMoment, 'day')

		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
		return textMatch && startDateMatch && endDateMatch
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1
		} else {
			return a.amount < b.amount ? 1 : -1
		}
	})
}