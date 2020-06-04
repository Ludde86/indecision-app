const path = require('path');

// entry poiont -> where our application kick of (app.js)
// output the final bundle file (javascript file that contains everything our app needs to run)

// the absolute path to our apllication
// join together two paths -> path to our app + public folder
module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	}
};
