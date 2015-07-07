
if (typeof window !== "undefined") {

  var React = require('react')
  , Router = require('react-router');

  window.onload = function() {
    Router.run(require('./routes.js'), Router.HashLocation, (Root) => {
      React.render(<Root/>, document.getElementById('layout'));
    });
    if (document.location.pathname !== "/" && document.location.hash !== '')
      document.location.href = document.location.pathname+"#"+document.location.pathname;
  }

}
