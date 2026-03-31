"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weftMat = exports.warpMat = exports.warpQuan = exports.warpLen = exports.density = void 0;
//fabCalc1
//density(tihedus)
var density = /** @class */ (function () {
    function density() {
    }
    density.prototype.calculate = function (reed) {
        return reed / 10;
    };
    density.prototype.inputUnit1 = function () {
        return " reed nr, ";
    };
    density.prototype.outputUnit1 = function () {
        return " warps per cm.";
    };
    return density;
}());
exports.density = density;
//full warp length(1lõime pikkus)
//pikkus*1,2+25+50
var warpLen = /** @class */ (function () {
    function warpLen() {
    }
    warpLen.prototype.calculate = function (finishedLen) {
        return 25 + (finishedLen * 1.2) + 50;
    };
    warpLen.prototype.inputUnit1 = function () {
        return " intended lenght of fabric in cm, ";
    };
    warpLen.prototype.outputUnit1 = function () {
        return " full lenght of the warp in cm.";
    };
    return warpLen;
}());
exports.warpLen = warpLen;
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
        return " reed nr, ";
    };
    warpQuan.prototype.inputUnit22 = function () {
        return " intended width of fabric in cm, ";
    };
    warpQuan.prototype.outputUnit2 = function () {
        return " number of warp threads needed.";
    };
    return warpQuan;
}());
exports.warpQuan = warpQuan;
//fabCalc3
//warp material ammount
var warpMat = /** @class */ (function () {
    function warpMat() {
    }
    warpMat.prototype.calculate = function (reed, width, finishedLen) {
        return (2 + (reed / 10) * (width * 1.05) + 2) + (25 + (finishedLen * 1.2) + 50);
    };
    warpMat.prototype.inputUnit3 = function () {
        return " reed nr, ";
    };
    warpMat.prototype.inputUnit33 = function () {
        return " intended width of fabric in cm, ";
    };
    warpMat.prototype.inputUnit333 = function () {
        return " intended lenght of fabric in cm, ";
    };
    warpMat.prototype.outputUnit3 = function () {
        return " m of warp material needed.";
    };
    return warpMat;
}());
exports.warpMat = warpMat;
//weft material ammount
var weftMat = /** @class */ (function () {
    function weftMat() {
    }
    weftMat.prototype.calculate = function (reed, finishedWid, finishedLen) {
        return (reed / 10) * (finishedWid * 1.05) + (25 + (finishedLen * 1.2) + 50);
    };
    weftMat.prototype.inputUnit3 = function () {
        return " reed nr, ";
    };
    weftMat.prototype.inputUnit33 = function () {
        return " intended width of fabric in cm, ";
    };
    weftMat.prototype.inputUnit333 = function () {
        return " intended lenght of fabric in cm, ";
    };
    weftMat.prototype.outputUnit3 = function () {
        return " m of weft material needed.";
    };
    return weftMat;
}());
exports.weftMat = weftMat;
