import React from 'react'
import AddOption from './add-option'
import Options from './options'
import Header from './header'
import Action from './action'
import OptionModal from './option-modal'

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: null
	}

	handleClearOption = () => {
		this.setState(() => ({
			selectedOption: null
		}))
	}

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }))
	}

	handlePick = () => {
		const i = Math.floor(Math.random() * this.state.options.length);
		const selectedOption = this.state.options[i]
		this.setState(() => ({ selectedOption }))
	}

	handleAddOption = (option) => {
		if (!option) {
			return 'Enter a valid Option'
		} else if (this.state.options.indexOf(option) != -1) {
			return 'This option alread exists'
		}
		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}))
	}

	handleDeleteOption = (option) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((item) => item != option)
		}))
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('options')
			const options = JSON.parse(json)
			if (json) {
				this.setState(() => ({ options }))
			}
		} catch (e) {
			console.error('Json invlaido no localstorage')
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options)
			localStorage.setItem('options', json)
		}
	}

	componentWillUnmount() {

	}

	render() {
		const title = 'Indecision App'
		return <div>
			<Header />
			<div className="container">
				<Action
					hasOptions={this.state.options.length != 0}
					handlePick={this.handlePick} />
				<div className='widget'>
					<Options
						options={this.state.options}
						handleDeleteOptions={this.handleDeleteOptions}
						handleDeleteOption={this.handleDeleteOption} />
					<AddOption
						handleAddOption={this.handleAddOption} />
					<OptionModal
						selectedOption={this.state.selectedOption}
						handleClearOption={this.handleClearOption} />
				</div>
			</div>
		</div>
	}
}
