'use strict';

console.log('is running');

var app = {
	title: 'Indecision App',
	subtitle: 'Make your decision',
	options: ['one', 'two']
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		app.options.length > 0 ? 'Here is your options' : 'No options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

var template2 = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Ludvig Bj\xF6rn'
	),
	React.createElement(
		'p',
		null,
		'Age: 33'
	),
	React.createElement(
		'p',
		null,
		'Location: Stockholm'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
