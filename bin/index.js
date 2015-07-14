/**
 * Module dependencies
 */

var sailsgen = require('sails-generate')
	, path = require('path')
	, NPM = require('machinepack-npm');



//
// This script exists so we can run our generator
// directly from the command-line for convenience
// during development.
//

var scope = {
	generatorType: 'isoreact',
	rootPath: process.cwd(),
	modules: {
		'isoreact': path.resolve(__dirname, '../Generator.js')
	},

	// For the NEW generator we're generating:
	generatorName: process.argv[2],
};
sailsgen(scope, function (err) {
	if (err) throw err;

	// It worked.
	console.log('start install react, react-router, ....');
});

