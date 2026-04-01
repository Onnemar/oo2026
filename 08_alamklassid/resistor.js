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
//abstract class=parent class
//abstract klassile viidates super.meetod
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    AbstractResistor.prototype.getCurrent = function (u) {
        return u / this.getRestance();
    };
    return AbstractResistor;
}());
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Resistor.prototype.getRestance = function () {
        return this.r;
    };
    return Resistor;
}(AbstractResistor));
var Resistor1 = new Resistor(220);
console.log("the resistance value of resistor 1 is " + Resistor1.getRestance());
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //default state is the switch is off
        _this.on = false;
        return _this;
    }
    Switch.prototype.setOn = function (state) {
        this.on = state;
    }; /*
    getRestance():number{
       if (this.on) {
        return 0;
       } else{
        return 1000000000
       }
    }*/
    Switch.prototype.getRestance = function () {
        return (this.on ? 0 : 1000000000);
    };
    Switch.prototype.getCurrent = function (u) {
        if (u > 0) {
            if (this.on) {
                throw new Error("Short circuit");
            }
        }
        return _super.prototype.getCurrent.call(this, u);
    };
    return Switch;
}(AbstractResistor));
function printResistance(r) {
    console.log(r.getRestance());
}
var s1 = new Switch();
console.log("the initial resistance value when it is off is " + s1.getRestance());
s1.setOn(true);
console.log("the initial resistance value when it is on is " + s1.getRestance());
s1.setOn(false);
try {
    console.log(s1.getCurrent(5));
}
catch (e) {
    console.log("caught error:", e.message);
}
console.log(s1.getCurrent(6));
//current =u/resistance value(hetkel 0)=infitine
console.log(s1.getCurrent(6));
//current =u/resistance value(hetkel 1000000000)=5e-9 (0.000000005)
printResistance(s1);
var MultibleConnections = /** @class */ (function (_super) {
    __extends(MultibleConnections, _super);
    function MultibleConnections() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resistors = [];
        return _this;
    }
    MultibleConnections.prototype.addResistor = function (r) {
        this.resistors.push(r);
    };
    return MultibleConnections;
}(AbstractResistor));
var SeriesConnection = /** @class */ (function (_super) {
    __extends(SeriesConnection, _super);
    function SeriesConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //r + r2 + r3...jne kui palju resistoreid tuleb
    SeriesConnection.prototype.getRestance = function () {
        var totalResistance = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var resistor = _a[_i];
            //get the resistance value of each resistors and add to th total
            totalResistance += resistor.getRestance();
        }
        return totalResistance;
    };
    return SeriesConnection;
}(MultibleConnections));
var s = new SeriesConnection();
s.addResistor(new Resistor(220));
s.addResistor(new Resistor(320));
s.addResistor(new Resistor(120));
s.addResistor(new Resistor(20));
var ParalelConnection = /** @class */ (function (_super) {
    __extends(ParalelConnection, _super);
    function ParalelConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //1/r + 1/r2 + 1/r3...jne kui palju resistoreid tuleb
    ParalelConnection.prototype.getRestance = function () {
        var inverseSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var resistor = _a[_i];
            //get the resistance value of each resistors and add to th total
            inverseSum += 1 / resistor.getRestance();
        }
        return 1 / inverseSum;
    };
    return ParalelConnection;
}(MultibleConnections));
var p = new ParalelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(320));
p.addResistor(new Resistor(120));
p.addResistor(new Resistor(20));
console.log("the resistance value of series connections  is " + s.getRestance() + " ohms.");
console.log("the resistance value of paralel connections1 is " + p.getRestance() + " ohms.");
