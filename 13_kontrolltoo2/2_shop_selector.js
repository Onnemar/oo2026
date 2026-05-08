var Shop1 = /** @class */ (function () {
    function Shop1(shopName, openingTime, closingTime) {
        this.shopName = shopName;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
    }
    Shop1.prototype.getOpening = function () { return this.openingTime; };
    Shop1.prototype.getClosing = function () { return this.closingTime; };
    return Shop1;
}());
var Chain1 = /** @class */ (function () {
    function Chain1() {
        this.stores = [];
    }
    Chain1.prototype.addStore = function (store) {
        this.stores.push(store);
    };
    Chain1.prototype.getStores = function () {
        return this.stores;
    };
    return Chain1;
}());
var s11 = new Shop1("Meri", 9, 15);
var s22 = new Shop1("Maa", 9, 15);
var s33 = new Shop1("Mee", 9, 15);
var ch1 = new Chain1();
ch1.addStore(s11);
ch1.addStore(s22);
ch1.addStore(s33);
console.log(ch1.getStores());
