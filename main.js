let dataCurrent = require('moment');
moment().format();

let welcome = require('./welcome');
var fio = document.getElementById("name");
welcome(fio);

let welclass = require('./welclass');
welclass({firstName: "Vasya",
    lastName: "Pupkin", 
    age: "25"});

module.exports = {
    welcome
};