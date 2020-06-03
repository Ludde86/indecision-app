class VisabilityToggle extends React.Component {
	// when we override the constructor (constructor(props)), we do have to maintain its previous behavior by taking those props, and passing them up to the parent constructor (super(props))
	constructor(props) {
		super(props);
		this.handleToggleVisability = this.handleToggleVisability.bind(this);
		this.state = {
			isVisible: false
		};
	}
	handleToggleVisability() {
		this.setState((prevState) => {
			return {
				isVisible: !prevState.isVisible
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisability}>
					{this.state.isVisible ? 'Hide details' : 'Show details'}
				</button>
				{this.state.isVisible && <p>Now you can see the details</p>}
			</div>
		);
	}
}

ReactDOM.render(<VisabilityToggle />, document.getElementById('app'));

// let isVisible = false;

// // const toggle = () => {
// // 	if (app.isVisible) {
// // 		app.isVisible = false;
// // 		renderApp();
// // 	} else {
// // 		app.isVisible = true;
// // 		renderApp();
// // 	}
// // };

// const toggle = () => {
// 	isVisible = !isVisible;
// 	renderApp();
// };

// const renderApp = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={toggle}>{isVisible ? 'Show details' : 'Hide details'}</button>
// 			{isVisible && <p>{'Now the text is visible!'}</p>}
// 		</div>
// 	);

// 	// 1. -> what to render in the react DOM
// 	// 2. -> where to render it (the div app in index.html)
// 	ReactDOM.render(template, document.getElementById('app'));
// };

// renderApp();
