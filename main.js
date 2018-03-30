const dataCurrent = require('moment');
let welcome = require('./welcome');
let welclass = require('./welclass');

module.exports = {
    welcome, welclass
};

moment().format();

let fio = document.getElementById("name");
welcome(fio);

let human = {firstName: "Vasya", lastName: "Pupkin", age: "25"};
welclass (human);