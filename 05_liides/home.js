var density = /** @class */ (function () {
    function density() {
    }
    density.prototype.calculate = function (reed) {
        return reed / 10;
    };
    density.prototype.inputUnit = function () {
        return "reed nr";
    };
    density.prototype.outputUnit = function () {
        return "warpPerCm";
    };
    return density;
}());
//warp width
var warpWid = /** @class */ (function () {
    function warpWid() {
    }
    warpWid.prototype.calculate = function (finished) {
        return finished * 1.05;
    };
    warpWid.prototype.inputUnit = function () {
        return "without shrinkage";
    };
    warpWid.prototype.outputUnit = function () {
        return "with shrinkage";
    };
    return warpWid;
}());
//warp quantity (mitu lõime)
//density*width+(2+2 äärelõime)
var warpQuan = /** @class */ (function () {
    function warpQuan() {
    }
    warpQuan.prototype.calculate = function (quantity) {
        return 2 + density.outputUnit * warpWid.outputUnit + 2;
    };
    warpQuan.prototype.outputUnit = function () {
        return "warpPerCm";
    };
    return warpQuan;
}());
//warp lenght + shrinkage
var warpLen = /** @class */ (function () {
    function warpLen() {
    }
    warpLen.prototype.calculate = function (finished2) {
        return finished2 * 1.2;
    };
    warpLen.prototype.inputUnit = function () {
        return "without shrinkage";
    };
    warpLen.prototype.outputUnit = function () {
        return "with shrinkage";
    };
    return warpLen;
}());
//full warp lenght
var fullLen = /** @class */ (function () {
    function fullLen() {
    }
    fullLen.prototype.calculate = function (fullWarpLen) {
        return 2 + density.outputUnit * warpWid.outputUnit + 2;
    };
    fullLen.prototype.outputUnit = function () {
        return "cm";
    };
    return fullLen;
}());
