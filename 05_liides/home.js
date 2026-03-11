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
//warp quantity (mitu lõime)
//density*width+(2+2 äärelõime)
var warpQuan = /** @class */ (function () {
    function warpQuan() {
    }
    warpQuan.prototype.calculate = function (reed, width) {
        return 2 + (reed / 10) * (width * 1.05) + 2;
    };
    warpQuan.prototype.inputUnit1 = function () {
        return "reed nr";
    };
    warpQuan.prototype.inputUnit2 = function () {
        return "fabric end width";
    };
    warpQuan.prototype.outputUnit = function () {
        return "number of warp threads";
    };
    return warpQuan;
}());
//warp lenght + shrinkage(1lõime pikkus)
//pikkus*1,2+25+50
var warpLen = /** @class */ (function () {
    function warpLen() {
    }
    warpLen.prototype.calculate = function (finishedLen) {
        return 25 + (finishedLen * 1.2) + 50;
    };
    warpLen.prototype.inputUnit = function () {
        return "without shrinkage in cm";
    };
    warpLen.prototype.outputUnit = function () {
        return "cm";
    };
    return warpLen;
}());
//warp material ammount
var warpMat = /** @class */ (function () {
    function warpMat() {
    }
    warpMat.prototype.calculate = function (reed, width, finishedLen) {
        return (2 + (reed / 10) * (width * 1.05) + 2) + (25 + (finishedLen * 1.2) + 50);
    };
    warpMat.prototype.inputUnit1 = function () {
        return "reed nr";
    };
    warpMat.prototype.inputUnit2 = function () {
        return "fabric end width";
    };
    warpMat.prototype.inputUnit3 = function () {
        return "without shrinkage in cm";
    };
    warpMat.prototype.outputUnit = function () {
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
    weftpMat.prototype.inputUnit1 = function () {
        return "reed nr";
    };
    weftpMat.prototype.inputUnit2 = function () {
        return "without shrinkage";
    };
    weftpMat.prototype.inputUnit3 = function () {
        return "without shrinkage in cm";
    };
    weftpMat.prototype.outputUnit = function () {
        return "cm";
    };
    return weftpMat;
}());
