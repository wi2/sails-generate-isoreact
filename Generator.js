/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');
_.defaults = require('merge-defaults');


/**
 * sails-generate-sails-generate-isoreact
 *
 * Usage:
 * `sails generate sails-generate-isoreact`
 *
 * @description Generates a sails-generate-isoreact
 * @help See http://links.sailsjs.org/docs/generators
 */

module.exports = {

  /**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Object} scope
   * @param  {Function} cb    [callback]
   */

  // before: function (scope, cb) {

  //   // scope.args are the raw command line arguments.
  //   //
  //   // e.g. if someone runs:
  //   // $ sails generate sails-generate-isoreact user find create update
  //   // then `scope.args` would be `['user', 'find', 'create', 'update']`
  //   if (!scope.args[0]) {
  //     return cb( new Error('Please provide a name for this sails-generate-isoreact.') );
  //   }

  //   // scope.rootPath is the base path for this generator
  //   //
  //   // e.g. if this generator specified the target:
  //   // './Foobar.md': { copy: 'Foobar.md' }
  //   //
  //   // And someone ran this generator from `/Users/dbowie/sailsStuff`,
  //   // then `/Users/dbowie/sailsStuff/Foobar.md` would be created.
  //   if (!scope.rootPath) {
  //     return cb( INVALID_SCOPE_VARIABLE('rootPath') );
  //   }


  //   // Attach defaults
  //   _.defaults(scope, {
  //     createdAt: new Date()
  //   });

  //   // Decide the output filename for use in targets below:
  //   scope.filename = scope.args[0];

  //   // Add other stuff to the scope for use in our templates:
  //   scope.whatIsThis = 'an example file created at '+scope.createdAt;

  //   // When finished, we trigger a callback with no error
  //   // to begin generating files/folders as specified by
  //   // the `targets` below.
  //   cb();
  // },



  /**
   * The files/folders to generate.
   * @type {Object}
   */

  targets: {

    //add browserify to config
    './tasks/config/browserify.js': { template: 'tasks/config/browserify.js' },
    //replace compilleAssets.js : add browserify to register
    './tasks/register/compileAssets.js': { template: 'tasks/register/compileAssets.js' },

    // Creates a folder for es6 react components
    './components': { folder: {} }

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
  'Issue encountered in generator "sails-generate-isoreact":\n'+
  'Missing required scope variable: `%s`"\n' +
  'If you are the author of `sails-generate-sails-generate-isoreact`, please resolve this '+
  'issue and publish a new patch release.';

  message = (message || DEFAULT_MESSAGE) + (details ? '\n'+details : '');
  message = util.inspect(message, varname);

  return new Error(message);
}
