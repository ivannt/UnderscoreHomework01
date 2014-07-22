(function () {

    //check if running on Node.js
    if (typeof require !== 'undefined') {
        //load underscore if on Node.js
        _ = require('scripts/underscore.js');
    }

var Student = Object.create({
    init: function (fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        return this;
    },
    fullname: function () {
        return this.fname + " " + this.lname;
    }
});

var persons = [
    Object.create(Student).init('ivailo', 'Ivchov', 24),
    Object.create(Student).init('Doncho', 'Minkov', 45),
    Object.create(Student).init('Mima', 'Petrova', 13),
    Object.create(Student).init('Kotzeto', 'Kalki', 23),
    Object.create(Student).init('Gosho', 'Goshev', 20)
];

var filteredStudentsByAge = _.filter(persons, function (st) {
    return st.age >= 18 && st.age <= 24;
});

_.each(filteredStudentsByAge, function (st) {
    console.log(st.fullname());
});

console.log('----------in array style----------');

console.log(_.map(filteredStudentsByAge, function (st) {
    return st.fullname();
}));

}());