//fabCalc1
//density(tihedus)
var density = /** @class */ (function () {
    function density() {
    }
    density.prototype.calculate = function (reed) {
        return reed / 10;
    };
    density.prototype.inputUnit1 = function () {
        return "reed nr";
    };
    density.prototype.outputUnit1 = function () {
        return "warpPerCm";
    };
    return density;
}());
//full warp length(1lõime pikkus)
//pikkus*1,2+25+50
var warpLen = /** @class */ (function () {
    function warpLen() {
    }
    warpLen.prototype.calculate = function (finishedLen) {
        return 25 + (finishedLen * 1.2) + 50;
    };
    warpLen.prototype.inputUnit1 = function () {
        return "without shrinkage in cm";
    };
    warpLen.prototype.outputUnit1 = function () {
        return "cm";
    };
    return warpLen;
}());
//fabCalc2
//warp quantity (mitu lõime)
//tihedus*laius+(2+2 äärelõime)
var warpQuan = /** @class */ (function () {
    function warpQuan() {
    }
    warpQuan.prototype.calculate = function (reed, width) {
        return 2 + (reed / 10) * (width * 1.05) + 2;
    };
    warpQuan.prototype.inputUnit2 = function () {
        return "reed nr";
    };
    warpQuan.prototype.inputUnit22 = function () {
        return "fabric end width";
    };
    warpQuan.prototype.outputUnit2 = function () {
        return "number of warp threads";
    };
    return warpQuan;
}());
//fabCalc3
//warp material ammount
var warpMat = /** @class */ (function () {
    function warpMat() {
    }
    warpMat.prototype.calculate = function (reed, width, finishedLen) {
        return (2 + (reed / 10) * (width * 1.05) + 2) + (25 + (finishedLen * 1.2) + 50);
    };
    warpMat.prototype.inputUnit3 = function () {
        return "reed nr";
    };
    warpMat.prototype.inputUnit33 = function () {
        return "fabric end width";
    };
    warpMat.prototype.inputUnit333 = function () {
        return "without shrinkage in cm";
    };
    warpMat.prototype.outputUnit3 = function () {
        return "cm";
    };
    return warpMat;
}());
//weft material ammount
var weftpMat = /** @class */ (function () {
    function weftpMat() {
    }
    weftpMat.prototype.calculate = function (reed, finishedWid, finishedLen) {
        return (reed / 10) * (finishedWid * 1.05) + (25 + (finishedLen * 1.2) + 50);
    };
    weftpMat.prototype.inputUnit3 = function () {
        return "reed nr";
    };
    weftpMat.prototype.inputUnit33 = function () {
        return "without shrinkage";
    };
    weftpMat.prototype.inputUnit333 = function () {
        return "without shrinkage in cm";
    };
    weftpMat.prototype.outputUnit3 = function () {
        return "cm";
    };
    return weftpMat;
}());
