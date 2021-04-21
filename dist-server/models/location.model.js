"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _default = function _default(sequelize) {
  var Location = sequelize.define("Location", {
    city: {
      type: _sequelize.DataTypes.STRING
    },
    state: {
      type: _sequelize.DataTypes.STRING
    }
  }, {
    timestamps: true
  });
  return Location;
};

exports["default"] = _default;