// Common JS
module.exports = function(human) {
    alert ('test 2');
    class Developer {
        constructor (firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        sayHi() {
            alert(`${this.firstName} ${this.lastName} ${this.age} year`);
        }
    };
    let developer = new Developer(human);
    developer.sayHi();
}