let React = require('react')
  , Router = require('react-router')
  , Route = Router.Route;

module.exports = (
  <Route handler={Router.RouteHandler}>
    <Route name="home" path="/" handler={require('./pages/home.js')} />
  </Route>
);
