"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.DVD = exports.Book = exports.LibraryItem = void 0;
var LibraryItem = /** @class */ (function () {
    function LibraryItem(id, title, author, year) {
        //trim removes whitespaces from both ends of the string
        //=== checking whether this is empty after removing spaces
        if (id.trim() === "")
            throw new Error("ID can not be empty");
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    LibraryItem.prototype.getId = function () {
        return this.id;
    };
    LibraryItem.prototype.getTitle = function () {
        return this.title;
    };
    LibraryItem.prototype.getAuthor = function () {
        return this.author;
    };
    LibraryItem.prototype.getYear = function () {
        return this.year;
    };
    LibraryItem.prototype.getSummary = function () {
        return "[item] $(this.title)";
    };
    return LibraryItem;
}());
exports.LibraryItem = LibraryItem;
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(id, title, author, year, pages, ISBN) {
        var _this = _super.call(this, id, title, author, year) || this;
        if (pages <= 0)
            throw new Error("Pages must be positive");
        _this.pages = pages;
        _this.ISBN = ISBN;
        return _this;
    }
    Book.prototype.getSummary = function () {
        return "[Book] ".concat(this.title, " (").concat(this.year, ")");
    };
    Book.prototype.toFillLine = function () {
        return "[Book]|".concat(this.id, "|").concat(this.title, "|").concat(this.author, "|(").concat(this.year, ")|").concat(this.pages, "|").concat(this.ISBN);
    };
    return Book;
}(LibraryItem));
exports.Book = Book;
//----------------------------DVD---------------------------------------------
var DVD = /** @class */ (function (_super) {
    __extends(DVD, _super);
    function DVD(id, title, director, year, duration) {
        var _this = _super.call(this, id, title, director, year) || this;
        if (duration <= 0)
            throw new Error("Duration must be positive");
        _this.duration = duration;
        return _this;
    }
    DVD.prototype.getSummary = function () {
        return "[DVD] ".concat(this.title, " (").concat(this.year, ")");
    };
    DVD.prototype.toFillLine = function () {
        return "[DVD]|".concat(this.id, "|").concat(this.title, "|").concat(this.author, "|(").concat(this.year, ")|").concat(this.duration, "}");
    };
    return DVD;
}(LibraryItem));
exports.DVD = DVD;
//----------------------------library---------------------------------------------
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    } //starts with a empty list
    //add a new item to the library
    Library.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Library.prototype.getAll = function () {
        return this.items;
    };
    Library.prototype.toText = function () {
        //map is an array method, it takes each item and transform it
        //i: each item in the array
        //i.toFillLine converts object-string
        return this.items.map(function (i) { return i.toFillLine(); }).join("\n");
        //\n mean new line
        // join("\n") : mean join everything with line breaks
    };
    //Covert text to objects, because we need to read item details from text files
    Library.prototype.loadFromText = function (text) {
        var lines = text.split("\n");
        var errors = [];
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            try {
                var parts = line.split("|");
                if (parts[0] === "BOOK") {
                    this.addItem(new Book(parts[1], parts[2], parts[3], Number(parts[4]), Number(parts[5]), parts[6]));
                }
                else if (parts[0] === "DVD") {
                    this.addItem(new DVD(parts[1], parts[2], parts[3], Number(parts[4]), Number(parts[5])));
                }
            }
            catch (e) {
                errors.push("Error" + line);
            }
        }
        return errors;
    };
    return Library;
}());
exports.Library = Library;
var item1 = new LibraryItem("1", "name", "unknown", 2024);
console.log(item1);
var book1 = new Book("29", "pealkiri", "autor", 2013, 216, "eugr873");
var book2 = new Book("94", "pealkirimingi", "aulotor", 2053, 316, "g4573");
console.log(book1);
console.log(item1.getSummary());
console.log(book1.getSummary());
console.log(book1.toFillLine());
var lib = new Library();
lib.addItem(book1);
lib.addItem(book2);
console.log(lib.toText());
var DVD1 = new DVD("29", "pealkiri", "autor", 2013, 2.16);
console.log(DVD1);
