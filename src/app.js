class IndecisionApp extends React.Component {

	render() {
		const title = 'Indecision'
		const options = [
			'One',
			'Two',
			'Three'
		]
		return <div>
			<Header title={title} />
			<Action />
			<Options options={options} />
			<AddOption />
		</div>
	}
}
class Header extends React.Component {
	render() {
		return <div>
			<h1>{this.props.title}</h1>
			<h2>Put your life in the hands of a computer.</h2>
		</div>
	}
}

class Action extends React.Component {
	handlePick() {
		alert('handPick')
	}


	render() {
		return <div>
			<button onClick={this.handlePick}>
				What should I do?
			</button>
		</div>
	}
}

class Option extends React.Component {
	render() {
		return <li>{this.props.optionText}</li>
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveAll = handleRemoveAll.bind(this)
	}

	handleRemoveAll() {
		alert('Remove All1')
	}

	render() {
		return <div>
			<button onClick={this.handleRemoveAll}>Removel All</button>
			<ol>
				{this.props.options.map(
					(option) => <Option optionText={option} key={option} />)
				}
			</ol>
		</div>
	}
}

class AddOption extends React.Component {
	onFormSumit(e) {
		e.preventDefault()
		const option = e.target.elements.option.value.trim()
		if (option) {
			alert(option)
			// app.options.push(option)
		}
	}

	render() {
		return <form onSubmit={this.onFormSumit}>
			<input type="text" name="option"></input>
			<button>
				Add the Option
			</button>
		</form>
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))