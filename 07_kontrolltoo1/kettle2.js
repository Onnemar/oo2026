//kannu võimsus 1200w, maht 2l=1000ml, sees 500ml. Mitu sek peab toimima
// 1cm3=1ml soojenemiseks 1 c võrra=>1kalor=4,19dzaul. 1 vatt=1dzaul/sek
//1200W=1200dz/sek
// =286,39c
//500*dz=
//(W/4.19) mitu ml sekundis
//sek=dz/watt
//ml*4,19=dza
//((ml*4.19)/W)(1kraad)
function degree(sec, ml, W) {
    return ((sec * (ml * 4.19) / W));
}
var tempNow = /** @class */ (function () {
    function tempNow() {
        this.sum = 0;
    }
    tempNow.prototype.add = function (degree) {
        this.sum += degree;
    };
    tempNow.prototype.getSum = function () {
        return this.sum;
    };
    tempNow.prototype.degree = function (sec, ml, W) {
        return ((sec * (ml * 4.19) / W));
    };
    return tempNow;
}());
console.log("Water temperature has risen " + degree(9, 1200, 500) + " c. Water Temperature now is" + tempNow);
