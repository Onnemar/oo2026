//Energy (J) = Power (W) × Time (s)
//1mAh battery=3.6JS
var battery = /** @class */ (function () {
    function battery(maxCapacity, curChargeLevel) {
        this.maxCapacity = maxCapacity;
        this.curChargeLevel = curChargeLevel;
    }
    battery.prototype.getCharPer = function () {
        return (100 * this.curChargeLevel) / this.maxCapacity;
    };
    return battery;
}());
var b = new battery(2400, 600);
console.log("Currenty charge level is " + b.getCharPer() + "%.");
