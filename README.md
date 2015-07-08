# sails-generate-isoreact

A `isoreact` generator for use with the Sails command-line interface.

Certain generators are installed by default in Sails, but they can be overridden.  Other generators create entirely new things.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators and information on building your own generators.



### dependencies : Browserify
```sh
$ npm install -g browserify
```


### Installation

Generate your sails app
```sh
$ sails generate new myApp
```

add browserifiy and dependencies
```sh
$ npm install sails-generate-isoreact
```


By default : sails-hook-babel, browserify, grunt-browserify, grunt-react, babelify, react, react-router, sails-react-store

Maybe, you need install grunt-browserify with sudo


### Usage

#### On the command line

##### First prepare your dependencies in your assets :
```sh
$ browserify -r react -r react-router -r sails-react-store > assets/js/dependencies/build.js
```
##### then do
```sh
$ sails generate isoreact
```


### Starting
see components's folder for starting

##### Example controller
```
var React = require('react')
  , Router = require('react-router')
  , routes = require('../../components/route.jsx');

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
