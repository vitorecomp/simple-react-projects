class IndecisionApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			options: props.options
		}
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
		this.handlePick = this.handlePick.bind(this)
		this.handleAddOption = this.handleAddOption.bind(this)
		this.handleDeleteOption = this.handleDeleteOption.bind(this)
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

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }))
	}

	handlePick() {
		const i = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[i]
		alert(option)
	}

	handleAddOption(option) {
		if (!option) {
			return 'Enter a valid Option'
		} else if (this.state.options.indexOf(option) != -1) {
			return 'This option alread exists'
		}
		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}))
	}

	handleDeleteOption(option) {
		this.setState((prevState) => ({
			options: prevState.options.filter((item) => item != option)
		}))
	}

	render() {
		const title = 'Indecision App'
		return <div>
			<Header />
			<Action
				hasOptions={this.state.options.length != 0}
				handlePick={this.handlePick} />
			<Options
				options={this.state.options}
				handleDeleteOptions={this.handleDeleteOptions}
				handleDeleteOption={this.handleDeleteOption} />
			<AddOption
				handleAddOption={this.handleAddOption} />
		</div>
	}
}
IndecisionApp.defaultProps = {
	options: []
}

const Header = (props) => {
	return <div>
		<h1>{props.title}</h1>
		<h2>Put your life in the hands of a computer.</h2>
	</div>
}
Header.defaultProps = {
	title: 'Indecision'
}

const Action = (props) => {
	return <div>
		<button onClick={props.handlePick}
			disabled={!props.hasOptions}>
			What should I do?
		</button>
	</div>
}

const Option = (props) => {
	return <li>
		{props.optionText}
		<button onClick={(e) => {
			props.handleDeleteOption(props.optionText)
		}}>
			remove
		</button>
	</li>
}

const Options = (props) => {
	return <div>
		<button onClick={props.handleDeleteOptions} > Removel All</button>
		<ol>
			{props.options.length == 0 && <p>Add a item to start</p>}
			{props.options.map(
				(option) => (
					<Option
						optionText={option}
						key={option}
						handleDeleteOption={props.handleDeleteOption}
					/>))
			}
		</ol>
	</div>
}


class AddOption extends React.Component {
	constructor(props) {
		super(props)
		this.onFormSumit = this.onFormSumit.bind(this)
		this.state = {
			error: null
		}
		this.errorStyle = {
			color: 'red'
		}
	}
	onFormSumit(e) {
		e.preventDefault()
		const option = e.target.elements.option.value.trim()
		let error = this.props.handleAddOption(option)
		this.setState(() => ({ error }))
		if (!error) {
			e.target.elements.option.value = ''
		}
	}

	render() {
		return <div>
			{this.state.error ? <p style={this.errorStyle}> {this.state.error}</p> : null}
			<form onSubmit={this.onFormSumit}>
				<input type="text" name="option"></input>
				<button>
					Add the Option
			</button>
			</form>
		</div >
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))