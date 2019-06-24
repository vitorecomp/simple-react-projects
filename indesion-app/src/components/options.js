import React from 'react'
import Option from './option'

const Options = (props) => (
	<div>
		<div className='widget-header'>
			<h3 className='widget-header__title'>Your Options</h3>
			<button
				className='button button--link'
				onClick={props.handleDeleteOptions} >
				Removel All
			</button>
		</div>
		<div>
			{props.options.length == 0 && <p className='widget__message'>Please add a option to get started!</p>}
			{props.options.map((option, index) => (
				<Option
					optionText={option}
					key={option}
					count={index + 1}
					handleDeleteOption={props.handleDeleteOption}
				/>))
			}
		</div>
	</div>
)

export default Options

