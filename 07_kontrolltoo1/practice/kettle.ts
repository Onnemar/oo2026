//1cm3=1ml soojenemiseks 1 c võrra=>1kalor=4,19dzaul. 1 vatt=1dzaul/sek

class kettle { 
    constructor(public cm3: number, public temp: number) {}

    ml(): number {
        return this.cm3;
    }

    tempNow(): number {
        if (this.temp > 80) {
            console.log("water is over 80c.");
        }
        return this.temp;
    }
}