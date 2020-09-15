"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var path = require('path');

var MODULE_NOT_FOUND_ERROR_CODE = 195;
/**
 * Works like require. The only difference is controls
 * if the given module has default export. And returns
 * the default export instead of the module itself.
 * Returns default export only if three conditions are satisfied:
 * 1) default property is already defined in module object
 * 2) exported module is an object
 * 3) exported module object has only one key-namely "default"-
 * @param moduleName {string}
 * @return {*}
 */

module.exports = function (moduleName) {
  var rootSegments = [__dirname, '..', '..', '..'];
  process.chdir(path.resolve.apply(path, rootSegments));
  var module;

  try {
    module = require(moduleName);
  } catch (err1) {
    try {
      module = require(path.resolve.apply(path, rootSegments.concat([moduleName])));
    } catch (err2) {
      console.error(err2);
      process.exit(MODULE_NOT_FOUND_ERROR_CODE);
    }
  }

  var isDefaultExport = 'default' in module && _typeof(module) === 'object' && Object.keys(module).length === 1;

  if (isDefaultExport) {
    return module["default"];
  }

  return module;
};