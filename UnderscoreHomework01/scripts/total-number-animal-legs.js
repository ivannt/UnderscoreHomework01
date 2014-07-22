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
        return this.name + " - " + this.species + " with " + this.legs + " legs";
    }
});

var animals = [
    Object.create(Animal).init('Cat', 'Lion', 4),
    Object.create(Animal).init('bird', 'Own', 2),
    Object.create(Animal).init('Dog', 'Terry+2', 6),
    Object.create(Animal).init('Primat', 'Gorrila*4', 8),
    Object.create(Animal).init('insect', 'HundredLeg', 100)];

var legsSum = 0;
_.each(animals, function (a) {
    legsSum += a.legs;
});
console.log(legsSum);

}());