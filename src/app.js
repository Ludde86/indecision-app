console.log('is running');

var app = {
	title: 'Indecision App',
	subtitle: 'Make your decision',
	options: [ 'one', 'two' ]
};

var template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here is your options' : 'No options'}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

var template2 = (
	<div>
		<h1>Ludvig Björn</h1>
		<p>Age: 33</p>
		<p>Location: Stockholm</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
