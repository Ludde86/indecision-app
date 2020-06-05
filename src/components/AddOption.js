import React from 'react';

export default class AddOption extends React.Component {
	state = {
		error: undefined
	};

	handleAddOption = (e) => {
		// e.preventDefault = stop full page refresh
		e.preventDefault();

		// e.target = <form>...</form>
		// e.target.elements = [input, button, option: input]
		// e.target.elements.option = <input type="text" name="option">
		// e.target.elements.option.value = the input value entered>
		// trim() = removes all white spaces
		const option = e.target.elements.option.value.trim();

		// store the return value back (string from the app bases handleAppOption)
		const error = this.props.handleAddOption(option);

		this.setState(() => ({ error }));

		// if no error, clear the input
		if (!error) {
			e.target.elements.option.value = '';
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
				{this.state.error && <p>{this.state.error}</p>}
			</div>
		);
	}
}
