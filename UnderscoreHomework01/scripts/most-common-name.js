(function () {

    //check if running on Node.js
    if (typeof require !== 'undefined') {
        //load underscore if on Node.js
        _ = require('scripts/underscore.js');
    }

    var Person = Object.create({
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
        Object.create(Person).init('Pesho', 'Petrov'),
        Object.create(Person).init('Ivan', 'Goshov'),
        Object.create(Person).init('Dragan', 'Karaganov'),
        Object.create(Person).init('Kiro', 'Pachkarev')
    ];

    var groupFirstName = _.groupBy(persons, 'fname');
    var maxFirstNameGroup = _.max(groupFirstName, function (gr) {
        return gr.length
    })[0].fname;

    console.log('Most common fname is ' + maxFirstNameGroup);

    var lastNamesCount = _.countBy(persons, function (p) {
        return p.lname
    });
    var indexLastName = _.max(lastNamesCount);
    lastNamesCount = _.invert(lastNamesCount);
    var maxLastNameGroup = (lastNamesCount[indexLastName]);

    console.log('Most common lname is ' + maxLastNameGroup);

}());