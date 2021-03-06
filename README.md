# sails-generate-isoreact

A `isomorphic react app` generator for use with the Sails command-line interface.

Certain generators are installed by default in Sails, but they can be overridden.  Other generators create entirely new things.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators and information on building your own generators.

## Isomorphic bootstrap App with react

#### install by default
- react,
- react-router, for routing app
- sails-react-store : wrap sails.socket.io with bluebrint method with 2 reactComponent (Item and CollectionItem)


### dependencies : Browserify
```sh
$ npm install -g browserify
```


### Installation

Generate your sails app
```sh
$ sails generate new myApp

$ cd myApp

$ npm install sails-generate-isoreact

```

Maybe, you need install grunt-browserify with sudo


### Usage

#### On the command line

##### First install with :
```sh
$ sails generate isoreact

$ npm i --save sails-hook-babel grunt-browserify

```
maybe use sudo

##### then do
```sh
$ browserify -r react -r react-router -r sails-react-store > assets/js/dependencies/build.js
```
##### finally add this in your layout.ejs before your scripts
```html
<script type="text/javascript"><%- locals.state||'' %></script>
```



### Starting
see components's folder for starting

##### Example Simple controller
```
var React = require('react')
  , Router = require('react-router')
  , routes = require('../../components/routes.js');

module.exports = {
  home: function(req, res) {
    Router.run(routes, "home", function(Root){
        res.view("layout", {
          locals: {
            title: 'My home',
            description: 'my sweet home'
          },
          body: React.renderToString(<Root />)
        });
      });
    });
  },

...

```


##### Example with renderTo service
```
var routes = require('../../components/routes.js');

module.exports = {
  home: function(req, res) {
    renderTo(routes, res.view, '/', {title:'home'})
  },
  articles: function(req, res) {
    Post.find().exec(function(err, posts){
      renderTo(routes, res.view, '/articles', {title:'articles'}, {items:posts});
    });
  },

...

```

##### example routes
```
...

  '/': 'HomeController.home',

  '/articles': 'HomeController.articles'

...
```



### Development

To get started quickly and see this generator in action, ...

Also see `CONTRIBUTING.md` for more information on overriding/enhancing existing generators.



### Questions?

See `FAQ.md`.



### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>


### License

**[MIT](./LICENSE)**
&copy; 2015 [balderdashy](http://github.com/balderdashy) & contributors

As for [Sails](http://sailsjs.org)?  It's free and open-source under the [MIT License](http://sails.mit-license.org/).

![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)
