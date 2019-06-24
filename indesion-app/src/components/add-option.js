import React from 'react'

export default class AddOption extends React.Component {
	state = {
		error: null
	}

	onFormSumit = (e) => {
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
			{this.state.error ? <p className="add-option-error"> {this.state.error}</p> : null}
			<form
				className="add-option"
				onSubmit={this.onFormSumit}>
				<input className="add-option__input" type="text" name="option"></input>
				<button className='button'>
					Add the Option
			</button>
			</form>
		</div >
	}
}
