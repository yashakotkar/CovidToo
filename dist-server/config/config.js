"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbConfig = void 0;
var dbConfig = {
  development: {
    // username: "ansako_onntoo",
    // password: "Admin@123",
    // database: "ansako_onntoo",
    // host: "mysql.freehostia.com",
    // // port: 3306,
    // dialect: "mysql",
    username: "root",
    password: "Yash@123",
    database: "covidtoo",
    host: "localhost",
    dialect: "mysql"
  },
  test: {// username: "root",
    // password: "Yash@123",
    // database: "onntoo",
    // host: "localhost",
    // dialect: "mysql",
  },
  production: {
    username: "ansako_onntoo",
    password: "Admin@123",
    database: "ansako_onntoo",
    host: "mysql.freehostia.com",
    // port: 3306,
    dialect: "mysql"
  }
};
exports.dbConfig = dbConfig;