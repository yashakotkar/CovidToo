"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Location = void 0;

var _sequelize = require("sequelize");

var _config = require("../config/config");

var _location = _interopRequireDefault(require("../models/location.model"));

var config = _config.dbConfig[process.env.NODE_ENV];
var sequelize = new _sequelize.Sequelize(config.database, config.username, config.password, config);
var Location = (0, _location["default"])(sequelize);
exports.Location = Location;
sequelize.sync().then(function () {
  console.log("Database & tables created!");
})["catch"](function (err) {
  return console.log(Eerr);
});
var _default = sequelize;
exports["default"] = _default;