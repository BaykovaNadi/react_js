let dataCurrent = require('moment');
moment().format();

let welcome = require('./welcome');
var fio = document.getElementById("name");
welcome(fio);

let welclass = require('./welclass');
var human = {firstName: "Vasya", lastName: "Pupkin", age: "25"};
welclass (human);

module.exports = {
    welcome, welclass
};