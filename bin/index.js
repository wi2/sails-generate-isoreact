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

	// var packages = ['sails-hook-babel', 'react', 'react-router', 'sails-react-store', 'react-image-es6'];
	// for(var i=0; i< packages.length; i++) {
	// 	NPM.installPackage({name: packages[i], save: true}).exec(function(){
	// 		console.log(" installé");
	// 	});
	// }

	// var devpackages = ['browserify', 'grunt-browserify', 'grunt-react', 'babelify'];
	// for(var i=0; i< devpackages.length; i++) {
	// 	NPM.installPackage({name: devpackages[i], savedev: true}).exec(function(){
	// 		console.log(" installé");
	// 	});
	// }

	// It worked.
	console.log('start install react, react-router, ....');
});

