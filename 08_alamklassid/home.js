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
//kassa. toote nimi, hind
//kliendikaart
//kaart: niisama
//sula: ümarda 5sendini
var cashRegister = /** @class */ (function () {
    function cashRegister() {
    }
    return cashRegister;
}());
var realPrice = /** @class */ (function (_super) {
    __extends(realPrice, _super);
    function realPrice(productName, price) {
        var _this = _super.call(this) || this;
        _this.productName = productName;
        _this.price = price;
        return _this;
    }
    realPrice.prototype.getProductName = function () {
        return this.productName;
    };
    realPrice.prototype.getPrice = function () {
        return this.price;
    };
    return realPrice;
}(cashRegister));
var rp = new realPrice("Milk", 1.29);
console.log(rp.getProductName() + " costs " + rp.getPrice() + " €.");
var clientCard = /** @class */ (function (_super) {
    __extends(clientCard, _super);
    function clientCard(productName, price) {
        var _this = _super.call(this) || this;
        //default state is the switch is off
        _this.clientCard = false;
        _this.productName = productName;
        _this.price = price;
        return _this;
    }
    clientCard.prototype.setclientCard = function (state) {
        this.clientCard = state;
    };
    clientCard.prototype.getProductName = function () {
        return this.productName;
    };
    clientCard.prototype.getPrice = function () {
        return Number((this.clientCard ? this.price * 0.8 : this.price).toFixed(2));
    };
    return clientCard;
}(cashRegister));
var cc = new clientCard("bread", 1.48);
console.log("The initial price of " + cc.getProductName() + " is " + cc.getPrice() + "€.");
cc.setclientCard(true);
console.log("The price of " + cc.getProductName() + " with using client card is " + cc.getPrice() + "€.");
var paymentMethod = /** @class */ (function (_super) {
    __extends(paymentMethod, _super);
    function paymentMethod(productName, price) {
        var _this = _super.call(this) || this;
        //default state is the switch is off
        _this.cash = false;
        _this.productName = productName;
        _this.price = price;
        return _this;
    }
    paymentMethod.prototype.setCash = function (state) {
        this.cash = state;
    };
    paymentMethod.prototype.getProductName = function () {
        return this.productName;
    };
    paymentMethod.prototype.getPrice = function () {
        return Number((this.cash ? Math.round(this.price / 0.05) * 0.05 : this.price).toFixed(2));
    };
    return paymentMethod;
}(cashRegister));
var pm = new paymentMethod("rice", 3.17);
console.log("If paid with card, " + pm.getProductName() + " costs " + pm.getPrice() + "€.");
pm.setCash(true);
console.log("If paid with cash, " + pm.getProductName() + " costs " + pm.getPrice() + "€.");
