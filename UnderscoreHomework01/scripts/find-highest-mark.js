(function () {

    //check if running on Node.js
    if (typeof require !== 'undefined') {
        //load underscore if on Node.js
        _ = require('scripts/underscore.js');
    }

var Student = Object.create({
    init: function (fname, lname, marks) {
        this.fname = fname;
        this.lname = lname;
        this.marks = marks;
        return this;
    },
    fullname: function () {
        return this.fname + " " + this.lname;
    }
});

Array.prototype.sum = function () {
    var sum = 0;
    n = this.length;
    for (var i = 0, sum = 0; i < n; i++) {
        sum += this[i];
    };
    return sum;
}

findAverigeMark = function (marks) {
    return (marks.sum() / marks.length).toFixed(2);
};

var persons = [
    Object.create(Student).init('ivailo', 'Ivchov', [4, 3.5, 3.5, 3.5]),
    Object.create(Student).init('Doncho', 'Minkov', [3, 3.5, 3.5, 4.5]),
    Object.create(Student).init('Mima', 'Petrova', [6, 5.5, 5.5, 5]),
    Object.create(Student).init('Kotzeto', 'Kalki', [2, 2.5, 5.5, 3.5])
];

var bestStudent = _.max(persons, function (st) {
    return findAverigeMark(st.marks);
});

console.log(bestStudent.fullname() + '- average mark: ' + findAverigeMark(bestStudent.marks));

console.log('----------ListOfStudent\'sMarks--------------');
_.each(persons, function (st) {
    console.log(st.fullname() + '- average mark: ' + findAverigeMark(st.marks));
});

}());