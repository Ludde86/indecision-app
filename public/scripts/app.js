console.log('is running');

var template = <p>this is JSX</p>;
// var template = React.createElement('p', null, 'this is old JavaScript');
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
