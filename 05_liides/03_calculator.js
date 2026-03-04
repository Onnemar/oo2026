var CmToInch = /** @class */ (function () {
    function CmToInch() {
    }
    CmToInch.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CmToInch.prototype.inputUnit = function () {
        return "cm";
    };
    CmToInch.prototype.outputUnit = function () {
        return "in";
    };
    return CmToInch;
}());
var InchToCm = /** @class */ (function () {
    function InchToCm() {
    }
    InchToCm.prototype.calculate = function (inch) {
        return inch * 2.54;
    };
    InchToCm.prototype.inputUnit = function () {
        return "in";
    };
    InchToCm.prototype.outputUnit = function () {
        return "cm";
    };
    return InchToCm;
}());
