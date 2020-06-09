import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	// "real boolean" ->
	//!! and valid type (ex string or number) = true
	//!! and no valid type (ex '' or undefined) = false
	// -> props.selectedOption is undefined at first -> !!undefined = false
	// -> we will set the state for selectedOption as a string (an option from the options array) -> !!'some option' = true
	<Modal
		isOpen={!!props.selectedOption}
		contentLabel="Selected Option"
		onRequestClose={props.handleClearSelectedOption} // even use this function to close ofscreen
	>
		<h3>Selected Option</h3>
		{props.selectedOption && <p>{props.selectedOption}</p>}
		<button onClick={props.handleClearSelectedOption}>Okay</button>
	</Modal>
);

export default OptionModal;
