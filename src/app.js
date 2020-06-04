class IndecisionApp extends React.Component {
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

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision'
};

const Action = (props) => {
	return (
		<div>
			<button disabled={!props.hasOptions} onClick={props.handlePick}>
				What should I do?
			</button>
		</div>
	);
};

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{!props.options.length && <p>Options is empty</p>}
			{props.options.map((option) => (
				<Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />
			))}
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button onClick={() => props.handleDeleteOption(props.optionText)}>Remove</button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}

	handleAddOption(e) {
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
	}

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
