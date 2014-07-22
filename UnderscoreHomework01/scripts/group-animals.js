(function () {

    //check if running on Node.js
    if (typeof require !== 'undefined') {
        //load underscore if on Node.js
        _ = require('scripts/underscore.js');
    }

var Animal = Object.create({
    init: function (name, species, legs) {
        this.name = name;
        this.species = species;
        this.legs = legs;
        return this;
    },
    fullname: function () {
        return this.name + " - " + this.species + 'with' + this.legs + 'legs';
    }
});


var animals = [
    Object.create(Animal).init('Cat', 'Lion', 4),
    Object.create(Animal).init('bird', 'Own', 2),
    Object.create(Animal).init('Dog', 'Terry', 4),
    Object.create(Animal).init('Primat', 'Gorrila', 2)
];

var groups = _.groupBy(animals, 'species');

var legSortedGroups = _.sortBy(groups, function (gr) {
    return gr[0].legs;
});

_.each(legSortedGroups, function (gr, key) {
    console.log(gr[0].species);
    _.each(gr, function (p) {
        console.log(p.fullname());
    });
});

}());