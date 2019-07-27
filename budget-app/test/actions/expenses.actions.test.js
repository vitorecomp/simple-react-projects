import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses.actions'

test('should setup remove expense action object', () => {
	const action = removeExpense(123)
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		expense: {
			id: 123
		}
	})
})

test('should setup the edit expense action object', () => {
	const action = editExpense(123, {
		description: 'Coffee',
		note: 'this is the est coffee i ever drink',
		amount: 200,
		createdAt: 0
	})
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: 123,
		expense: {
			description: 'Coffee',
			note: 'this is the est coffee i ever drink',
			amount: 200,
			createdAt: 0
		}
	})
})

test('should setup the add expense action object', () => {
	const action = addExpense({
		description: 'Coffee',
		note: 'this is the est coffee i ever drink',
		amount: 200,
		createdAt: 0
	})
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: 'Coffee',
			note: 'this is the est coffee i ever drink',
			amount: 200,
			createdAt: 0
		}
	})
})

test('should setup the add expense action object with default', () => {
	const action = addExpense()
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	})
})