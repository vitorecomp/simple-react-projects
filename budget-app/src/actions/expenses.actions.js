import uuid from 'uuid'

export const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
})

export const removeExpense = (id) => ({
	type: 'REMOVE_EXPENSE',
	expense: {
		id: id
	}
})

export const editExpense = (id, {
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
}) => ({
	type: 'EDIT_EXPENSE',
	id,
	expense: {
		description,
		note,
		amount,
		createdAt
	}
})
