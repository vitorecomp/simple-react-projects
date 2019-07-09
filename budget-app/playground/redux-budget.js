


store.subscribe(() => {
	const { expenses, filters } = store.getState();
	const visibleExpenses = getVisibleExpenses(expenses, filters);
	console.log(visibleExpenses)
})

store.dispatch(addExpense({ description: 'coffe', amount: 10, createdAt: 20 }))
store.dispatch(addExpense({ description: 'red coffe', amount: 10, createdAt: 25 }))
store.dispatch(addExpense({ description: 'green coffee', amount: 9, createdAt: 100 }))

//store.dispatch(setTextFilter('red'))
// store.dispatch(setStartDate(23))
// store.dispatch(setEndDate(50))

store.dispatch(sortByDate())


