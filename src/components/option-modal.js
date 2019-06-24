import React from 'react'
import Modal from 'react-modal'


const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selectedOption}
		contentLabel="Selected Option"
		onRequestClose={props.handleClearOption}
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal__title">Selected Option</h3>
		<div>
			{props.selectedOption &&
				<p className="modal__body">{props.selectedOption}</p>}
		</div>
		<button
			onClick={props.handleClearOption}
			className="button">
			Ok
		</button>
	</Modal>
)
export default OptionModal