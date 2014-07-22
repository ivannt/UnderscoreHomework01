(function () {

    //check if running on Node.js
    if (typeof require !== 'undefined') {
        //load underscore if on Node.js
        _ = require('scripts/underscore.js');
    }

var Book = Object.create({
    init: function (name, author) {
        this.name = name,
        this.author = author;
        return this;
    },
    fullname: function () {
        return this.name + ' ' + this.author;
    }
});

var books = []; // four authors for example
for (var i = 1; i < 5; i++) {
    var bname = 'book' + i;
    var bauthor = 'author' + (Math.round(Math.random() * 2) + 1);
    books.push(Object.create(Book).init(bname, bauthor));
}

_.each(books, function (b) {
    console.log(b);
});

var groups = _.groupBy(books, 'author');

var maxGroup = _.max(groups, function (gr) {
    return gr.length
});

var bestAuthor = maxGroup[0].author;
console.log(bestAuthor);

}());