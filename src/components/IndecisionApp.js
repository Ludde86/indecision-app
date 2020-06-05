import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: []
		};
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
	}

	// fetch the last saved data
	componentDidMount() {
		// if data is not valid
		try {
			const json = JSON.parse(localStorage.getItem('options'));

			// if no data
			if (json) {
				this.setState(() => ({ options: json }));
			}
		} catch (error) {
			// Do nothing
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	// JSON.stringify = takes a regular javascript object and get the string representation
	// JSON.parse = takes the string representation and return a true javascript object

	handleDeleteOption(optionToRemove) {
		console.log('optionToRemove', optionToRemove);
		// this.setState((prevState) => ({
		// 	options: prevState.options.filter((option) => {
		// 		return optionToRemove !== option;
		// 	})
		// }));

		// we filter OUT the content that doesnt match the option we want to remove
		// this creates a new array that we set in the state
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));

		alert(optionToRemove);
	}

	handleDeleteOptions() {
		// this.setState(() => {
		// 	return {
		// 		options: []
		// 	};
		// });
		this.setState(() => ({ options: [] }));
		alert('Clear list of options');
	}

	handlePick() {
		// const randomNum = Math.floor(Math.random() * this.state.options.length);
		// const randomOpt = this.state.options[Math.floor(Math.random() * this.state.options.length)];
		alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
	}

	handleAddOption(option) {
		if (!option) {
			// this is going to get communicated via return back down to the AddOption component
			return 'Enter valid value to add option';
		} else if (this.state.options.indexOf(option) > -1) {
			// if the option already exists in the options array

			// indexOf() = return the zero based index, so 0 if the first item, one if its the second item
			// -> or -1 if the item doesnt exist at all
			return 'This option already exists';
		}
		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
		// 	options: [ ...prevState.options, option ]
	}

	render() {
		const subtitle = 'Make your choice';
		return (
			<div>
				<Header subtitle={subtitle} />
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption options={this.state.options} handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}
