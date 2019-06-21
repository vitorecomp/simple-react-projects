class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.hideShow = this.hideShow.bind(this)
		this.state = {
			details: true
		}
	}
	hideShow() {
		this.setState((prevState) => {
			return {
				details: !prevState.details
			}
		})
	}

	render() {
		return <div>
			<button onClick={this.hideShow}>{this.state.details ? 'Hide' : 'Show'}</button>
			{this.state.details ? <h1>This is the details</h1> : null}
		</div>
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'))