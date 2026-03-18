//kannu võimsus 1200w, maht 2l=1000ml, sees 500ml. Mitu sek peab toimima
// 1cm3=1ml soojenemiseks 1 c võrra=>1kalor=4,19dzaul. 1 vatt=1dzaul/sek
//1200W=1200dz/sek
// =286,39c
//500*dz=
//(W/4.19) mitu ml sekundis
//sek=dz/watt
//ml*4,19=dza
//((ml*4.19)/W)(1kraad)
function degree(sec:number, ml:number, W:number){
    return((sec*(ml*4.19)/W))

}

class tempNow {
    protected sum:number=0;
    add(degree:number):void{
        this.sum+=degree;
    }
    getSum():number{
        return this.sum
    }
     degree(sec:number, ml:number, W:number){
    return((sec*(ml*4.19)/W))

}

}

console.log("Water temperature has risen " + degree(9,1200,500)+" c.")



