import React from 'react'
import ReactDOM from 'react-dom'


import 'normalize.css/normalize.css'
import './styles/styles.scss'


import AppRouter from './routers/AppRouter'

import { Provider } from 'react-redux'
import storeCreator from './store/configureStore'
const store = storeCreator()

//test data
import { addExpense } from './actions/expenses.actions'
store.dispatch(addExpense({ description: 'Water bill', amount: 20, createdAt: 200 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 201, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 21, createdAt: 1001 }))



let app = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(app, document.getElementById('app'))