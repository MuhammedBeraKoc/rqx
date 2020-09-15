<img src="header.svg">

## `Why to even use this library?`
The most popular transpiler is `Babel` nowadays. And it converts the `ES6 modules` to `RequireJS`. The problem is that it uses a property called `default` in `exports` object. As an example:
```js
// Module.js before Babel
default export ModuleClass {}
// Module.js after Babel
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleClass = function ModuleClass() {
  _classCallCheck(this, ModuleClass);
};

exports.default = ModuleClass;
// Using compiled Module.js in App.js
// App.js
const ModuleClass = require('./Module')
const myModule = new ModuleClass() // Gives error!
```
But if you had used the rqx, this would've not be a problem for you.
```js
//...Compiling Module
// App.js
const ModuleClass = rqx('Module')
const myModule = new ModuleClass()
```
> `In rqx you don't use relative path. node modules and local modules are treated as the same. rqx is a smart module loader. However it always prioritises node modules over local modules.`

## `Contributing`
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Also you can help me to improve the library by adding new [issues](https://github.com/MuhammedBeraKoc/rqx/issues).