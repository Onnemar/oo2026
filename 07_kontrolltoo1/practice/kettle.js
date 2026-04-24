//1cm3=1ml soojenemiseks 1 c võrra=>1kalor=4,19dzaul. 1 vatt=1dzaul/sek
//class kettle{
//   constructor( public cm3:number, public temp:number){}
//    ml():number{
//        return(this.cm3);
//    }
//    tempNow():number{
//        return(this.temp);
//    }
// }
var Kettle = /** @class */ (function () {
    function Kettle(cm3, temp) {
        this.cm3 = cm3;
        this.temp = temp;
    }
    //this mode is to show the population numbers
    Kettle.prototype.show = function () {
        console.log(this.cm3, this.temp);
    };
    //Average number in nationalities per a specific county.
    Kettle.prototype.averagePopulation = function () {
        return (this.cm3, this.temp) / 5;
    };
    Kettle.prototype.getPopulation = function () {
        return { ml: this.cm3, tempNow: this.temp };
    };
    return Kettle;
}());
