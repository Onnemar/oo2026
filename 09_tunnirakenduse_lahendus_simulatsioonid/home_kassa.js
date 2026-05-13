var CashRegister = /** @class */ (function () {
    //constructor runs when new water object is created
    function CashRegister(cashInside, taxRate) {
        this.cardMoney = 0;
        this.scannerStatus = false;
        this.cashInside = cashInside;
        this.taxRate = taxRate;
    }
    CashRegister.prototype.scannerOn = function () {
        this.scannerStatus = true;
    };
    CashRegister.prototype.scannerOff = function () {
        this.scannerStatus = false;
    };
    CashRegister.prototype.getCashAmount = function () {
        return this.cashInside;
    };
    CashRegister.prototype.getCardAmount = function () {
        return this.cardMoney;
    };
    CashRegister.prototype.fiveCents = function (amount) {
        return Number((Math.round(amount * 100) / 100).toFixed(2));
    };
    CashRegister.prototype.card = function (price) {
        if (!this.scannerStatus) {
            console.log("Scanner is off");
            return;
        }
        var paidPrice = price + (price * this.taxRate / 100);
        paidPrice = Math.round(paidPrice * 100) / 100;
        this.cardMoney += paidPrice;
        return paidPrice;
    };
    CashRegister.prototype.cash = function (paid, price) {
        if (!this.scannerStatus) {
            console.log("Scanner is off, try again");
            return;
        }
        var paidPrice = price + (price * this.taxRate / 100);
        paidPrice = this.fiveCents(paidPrice);
        var changeBack = paid - paidPrice;
        changeBack = this.fiveCents(changeBack);
        if (changeBack >= 0) {
            this.cashInside += paidPrice;
            return changeBack;
        }
        else {
            console.log("not enough money paid");
            return 0;
        }
    };
    return CashRegister;
}());
var cr = new CashRegister(10, 24);
console.log("There is " + cr.getCashAmount() + "€ inside.");
cr.scannerOn();
cr.card(1.78);
console.log("There is " + cr.getCashAmount() + "€ inside and " + cr.getCardAmount() + "€ paid by card.");
cr.cash(10.12, 2);
console.log("There is " + cr.getCashAmount() + "€ inside and " + cr.getCardAmount() + "€ paid by card.");
cr.scannerOff();
cr.cash(1.12, 2);
console.log("There is " + cr.getCashAmount() + "€ inside and " + cr.getCardAmount() + "€ paid by card.");
