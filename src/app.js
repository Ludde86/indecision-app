class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Indecision',
			subtitle: 'Make your choice',
			options: []
		};
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
	}

	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: []
			};
		});
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
		this.setState((prevState) => {
			return {
				options: prevState.options.concat(option)
			};
			// return {
			// 	options: [ ...prevState.options, option ]
			// };
		});
	}

	render() {
		return (
			<div>
				<Header title={this.state.title} subtitle={this.state.subtitle} />
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
				<Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
				<AddOption options={this.state.options} handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
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
			{props.options.map((option) => {
				return <Option key={option} option={option} />;
			})}
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			<p>{props.option}</p>
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

		this.setState(() => {
			return { error };
		});
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
