"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLocation;

var _sample = require("lodash/sample");

var _sample2 = _interopRequireDefault(_sample);

var _locations = require("./config/locations");

var _locations2 = _interopRequireDefault(_locations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLocation(name) {
  return (0, _sample2.default)(_locations2.default);
}