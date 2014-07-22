(function () {

    //check if running on Node.js
    if (typeof require !== 'undefined') {
        //load underscore if on Node.js
        _ = require('scripts/underscore.js');
    }

var Student = Object.create({
    init: function (fname, lname) {
        this.fname = fname;
        this.lname = lname;
        return this;
    },
    fullname: function () {
        return this.fname + " " + this.lname;
    }
});

var persons = [
    Object.create(Student).init('Pesho', 'Petrov'),
    Object.create(Student).init('Ivan', 'Goshov'),
    Object.create(Student).init('Dragan', 'Karaganov'),
    Object.create(Student).init('Kiro', 'Pachkarev')
];

var filteredStudents = _.filter(persons, function (st) {
    return st.fname < st.lname;
});

var sortStudents =
    _.sortBy(filteredStudents, function (st) {
        return st.fullname();
    })
        .reverse();

_.each(sortStudents, function (st) {
    console.log(st.fullname());
});

}());