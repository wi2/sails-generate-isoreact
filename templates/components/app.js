
if (typeof window !== "undefined") {

  var React = require('react')
  , Router = require('react-router');

  window.onload = function() {
    Router.run(require('./routes.js'), Router.HistoryLocation, (Root) => {
      React.render(<Root/>, document.body);
    });
  }

}
