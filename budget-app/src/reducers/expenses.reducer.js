const expensesReducerDefaultState = []
export default (state = expensesReducerDefaultState, { type, id, expense }) => {
	switch (type) {
		case 'ADD_EXPENSE':
			return [...state, expense]
		case 'REMOVE_EXPENSE':
			return state.filter((e) => (e.id != expense.id))
		case 'EDIT_EXPENSE':
			return state.map((e) => {
				if (e.id != id)
					return e
				else
					return {
						...e,
						...expense
					}
			})
		default:
			return state
	}
}