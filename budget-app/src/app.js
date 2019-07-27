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
import moment from 'moment'

store.dispatch(addExpense({ description: 'Water bill', amount: 20, createdAt: moment().valueOf() }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 201, createdAt: moment().valueOf() }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 21, createdAt: moment().valueOf() }))



let app = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(app, document.getElementById('app'))