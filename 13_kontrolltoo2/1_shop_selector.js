var Shop = /** @class */ (function () {
    function Shop(openingTime, closingTime, visitorTime) {
        this.visitorsAtFirst = 0;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.visitorTime = visitorTime;
    }
    Shop.prototype.isOpen = function () {
        if (this.openingTime < this.visitorTime && this.visitorTime < this.closingTime) {
            return String("Store is opened");
        }
        else {
            return String("Store is closed");
        }
    };
    Shop.prototype.visit = function (visitorTime) {
        if (this.openingTime < visitorTime && this.visitorTime < this.closingTime) { }
        var visitorAtTime = 1;
        var newVisitors = this.visitorsAtFirst += visitorAtTime;
        newVisitors = this.visitorsAtFirst;
        return newVisitors;
    };
    return Shop;
}());
var s1 = new Shop(9, 15, 10);
s1.visit(13);
s1.visit(13);
s1.visit(13);
s1.visit(13);
s1.visit(13);
console.log(s1.isOpen());
console.log(s1.visit(11));
