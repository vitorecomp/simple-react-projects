import expenseReducer from '../../src/reducers/expenses.reducer'
import expenses from '../fixtures/expense.fixtures'

test('should set a default state', () => {
	const state = expenseReducer(undefined, { type: '@@INIT' })
	expect(state).toEqual([])
})

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		expense: {
			id: expenses[1].id
		}
	};
	const state = expenseReducer(expenses, action)
	expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by id, if a invalid id is passed', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		expense: {
			id: '-1'
		}
	};
	const state = expenseReducer(expenses, action)
	expect(state).toEqual(expenses)
})

test('should add a new expense', () => {
	const action = {
		type: 'ADD_EXPENSE',
		expense: expenses[0]
	};
	const state = expenseReducer(expenses, action)
	expect(state).toEqual([...expenses, expenses[0]])
})

test('should edit a expense by id', () => {
	const expense = {
		...expenses[1],
		amount: 1000,
	}
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		expense: expense
	};
	const state = expenseReducer(expenses, action)
	expect(state).toEqual([expenses[0], expense, expenses[2]])
})

test('should not edit any expense', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		expense: {
			id: '-1'
		}
	};
	const state = expenseReducer(expenses, action)
	expect(state).toEqual(expenses)
})