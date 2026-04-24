//Energy (J) = Power (W) × Time (s)
//1mAh battery=3.6JS
var battery = /** @class */ (function () {
    function battery(maxCapacity, curChargeLevel, charPower) {
        this.maxCapacity = maxCapacity;
        this.curChargeLevel = curChargeLevel;
        this.charPower = charPower;
    }
    battery.prototype.getCharPer = function () {
        return (100 * this.curChargeLevel) / this.maxCapacity;
    };
    battery.prototype.getCharTime = function () {
        return this.maxCapacity / this.charPower;
    };
    return battery;
}());
var b = new battery(2400, 600, 50);
console.log("Currenty charge level is " + b.getCharPer() + "%.");
console.log(b.getCharTime());
