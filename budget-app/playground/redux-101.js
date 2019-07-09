import {
	createStore
} from 'redux'

const incrementCount = ({ incrementBy = 1 }) => ({
	type: 'INCREMENT',
	incrementBy
})

const decrementCount = ({ decrementBy = 1 }) => ({
	type: 'DECREMENT',
	decrementBy
})

const resetCount = () => ({
	type: 'RESET'
})

const reducer = (state = { count: 0 }, { type, incrementBy }) => {
	switch (type) {
		case 'INCREMENT':
			return {
				count: state.count + incrementBy
			}
		case 'DECREMENT':
			return {
				count: state.count + incrementBy
			}
		case 'RESET':
			return {
				count: 0
			}
		default:
			return state;
	}
}
const store = createStore(reducer)

const unsub = store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 10 }))
store.dispatch({
	type: 'RESET'
})
store.dispatch(incrementCount({ incrementBy: 10 }))
unsub()
store.dispatch({
	type: 'INCREMENT',
	incrementBy: 15
})
