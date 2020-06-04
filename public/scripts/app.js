'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.state = {
			options: []
		};
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		return _this;
	}

	// fetch the last saved data


	_createClass(IndecisionApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// if data is not valid
			try {
				var json = JSON.parse(localStorage.getItem('options'));

				// if no data
				if (json) {
					this.setState(function () {
						return { options: json };
					});
				}
			} catch (error) {
				// Do nothing
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.options.length !== this.state.options.length) {
				var json = JSON.stringify(this.state.options);
				localStorage.setItem('options', json);
			}
		}

		// JSON.stringify = takes a regular javascript object and get the string representation
		// JSON.parse = takes the string representation and return a true javascript object

	}, {
		key: 'handleDeleteOption',
		value: function handleDeleteOption(optionToRemove) {
			console.log('optionToRemove', optionToRemove);
			// this.setState((prevState) => ({
			// 	options: prevState.options.filter((option) => {
			// 		return optionToRemove !== option;
			// 	})
			// }));

			// we filter OUT the content that doesnt match the option we want to remove
			// this creates a new array that we set in the state
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return optionToRemove !== option;
					})
				};
			});

			alert(optionToRemove);
		}
	}, {
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			// this.setState(() => {
			// 	return {
			// 		options: []
			// 	};
			// });
			this.setState(function () {
				return { options: [] };
			});
			alert('Clear list of options');
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			// const randomNum = Math.floor(Math.random() * this.state.options.length);
			// const randomOpt = this.state.options[Math.floor(Math.random() * this.state.options.length)];
			alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			if (!option) {
				// this is going to get communicated via return back down to the AddOption component
				return 'Enter valid value to add option';
			} else if (this.state.options.indexOf(option) > -1) {
				// if the option already exists in the options array

				// indexOf() = return the zero based index, so 0 if the first item, one if its the second item
				// -> or -1 if the item doesnt exist at all
				return 'This option already exists';
			}
			this.setState(function (prevState) {
				return { options: prevState.options.concat(option) };
			});
			// 	options: [ ...prevState.options, option ]
		}
	}, {
		key: 'render',
		value: function render() {
			var subtitle = 'Make your choice';
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { subtitle: subtitle }),
				React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions,
					handleDeleteOption: this.handleDeleteOption
				}),
				React.createElement(AddOption, { options: this.state.options, handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subtitle && React.createElement(
			'h2',
			null,
			props.subtitle
		)
	);
};

Header.defaultProps = {
	title: 'Indecision'
};

var Action = function Action(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ disabled: !props.hasOptions, onClick: props.handlePick },
			'What should I do?'
		)
	);
};

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'Remove All'
		),
		!props.options.length && React.createElement(
			'p',
			null,
			'Options is empty'
		),
		props.options.map(function (option) {
			return React.createElement(Option, { key: option, optionText: option, handleDeleteOption: props.handleDeleteOption });
		})
	);
};

var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		props.optionText,
		React.createElement(
			'button',
			{ onClick: function onClick() {
					return props.handleDeleteOption(props.optionText);
				} },
			'Remove'
		)
	);
};

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			// e.preventDefault = stop full page refresh
			e.preventDefault();

			// e.target = <form>...</form>
			// e.target.elements = [input, button, option: input]
			// e.target.elements.option = <input type="text" name="option">
			// e.target.elements.option.value = the input value entered>
			// trim() = removes all white spaces
			var option = e.target.elements.option.value.trim();

			// store the return value back (string from the app bases handleAppOption)
			var error = this.props.handleAddOption(option);

			this.setState(function () {
				return { error: error };
			});

			// if no error, clear the input
			if (!error) {
				e.target.elements.option.value = '';
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				),
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));