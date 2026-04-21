//Energy (J) = Power (W) × Time (s)
//1mAh battery=3.6JS

class battery{
    maxCapacity:number;
    curChargeLevel:number;
    charPower:number;

    constructor(maxCapacity:number, curChargeLevel:number){
        this.maxCapacity=maxCapacity;
        this.curChargeLevel=curChargeLevel;
    }

    getCharPer():number{
        return (100*this.curChargeLevel)/this.maxCapacity;
    }
}

let b=new battery(2400,600);
console.log("Currenty charge level is "+ b.getCharPer()+ "%.");