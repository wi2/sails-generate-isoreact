/**
 * Module dependencies
 */

var util = require('util')
  , _ = require('lodash')
  , fs = require('fs')
  , NPM = require('machinepack-npm');

_.defaults = require('merge-defaults');



module.exports = {


  before: function (scope, cb) {
    fs.unlink('tasks/config/watch.js', function (err) {
      if (err) throw err;
      console.log('successfully deleted /tasks/config/watch.js');
      fs.unlink('tasks/register/compileAssets.js', function (err) {
        if (err) throw err;
        console.log('successfully deleted /tasks/register/compileAssets.js');
        cb();
      });
    });
  },

  after: function (scope, cb) {
    var packages = ['sails-hook-babel', 'grunt-browserify', 'grunt-react', 'babelify', 'react', 'react-router', 'sails-react-store'];
    console.log("install browserify : " + "npm install -g browserify");
    console.log("");
    console.log("you need to install dependencies, copy this : ");
    console.log("npm install --save " + packages.join(" "));
    console.log("if error, maybe you need sudo");
    console.log("");
    console.log("");
    console.log("Done");
    //don't work very well
    // for(var i=0; i< packages.length; i++) {
    //   NPM.installPackage({name: packages[i], save: true}).exec(function(){
    //     console.log(" installé");
    //   });
    // }

    // var devpackages = ['browserify', 'grunt-browserify', 'grunt-react', 'babelify'];
    // for(var i=0; i< devpackages.length; i++) {
    //   NPM.installPackage({name: devpackages[i], saveDev: true}).exec(function(){
    //     console.log(" installé");
    //   });
    // }

  },



  /**
   * The files/folders to generate.
   * @type {Object}
   */

  targets: {

    //add browserify and update watch to config
    './tasks/config/browserify.js': { template: 'tasks/config/browserify.js' },
    './tasks/config/watch.js': { template: 'tasks/config/watch.js' },
    //replace compilleAssets.js : add browserify to register
    './tasks/register/compileAssets.js': { template: 'tasks/register/compileAssets.js' },

    // Creates a folder for es6 react components and bootstrap example
    './components': { folder: {} },
    './components/pages': { folder: {} },
    './components/partials': { folder: {} },
    './components/pages/home.js': { template: 'components/pages/home.js' },
    './components/partials/nav.js': { template: 'components/partials/nav.js' },
    './components/layout.js': { template: 'components/layout.js' },
    './components/routes.js': { template: 'components/routes.js' },
    './components/app.js': { template: 'components/app.js' }

  },


  /**
   * The absolute path to the `templates` for this generator
   * (for use with the `template` helper)
   *
   * @type {String}
   */
  templatesDirectory: require('path').resolve(__dirname, './templates')
};





/**
 * INVALID_SCOPE_VARIABLE()
 *
 * Helper method to put together a nice error about a missing or invalid
 * scope variable. We should always validate any required scope variables
 * to avoid inadvertently smashing someone's filesystem.
 *
 * @param {String} varname [the name of the missing/invalid scope variable]
 * @param {String} details [optional - additional details to display on the console]
 * @param {String} message [optional - override for the default message]
 * @return {Error}
 * @api private
 */

function INVALID_SCOPE_VARIABLE (varname, details, message) {
  var DEFAULT_MESSAGE =
  'Issue encountered in generator "isoreact":\n'+
  'Missing required scope variable: `%s`"\n' +
  'If you are the author of `sails-generate-isoreact`, please resolve this '+
  'issue and publish a new patch release.';

  message = (message || DEFAULT_MESSAGE) + (details ? '\n'+details : '');
  message = util.inspect(message, varname);

  return new Error(message);
}
