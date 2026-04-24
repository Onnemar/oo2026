//Energy (J) = Power (W) × Time (s)
//1mAh battery=3.6JS

class battery{
    maxCapacity:number;//mah
    curChargeLevel:number;//mah
    charPower:number;//w

    constructor(maxCapacity:number, curChargeLevel:number, charPower:number){
        this.maxCapacity=maxCapacity;
        this.curChargeLevel=curChargeLevel;
        this.charPower=charPower;
    }

    getCharPer():number{
        return (100*this.curChargeLevel)/this.maxCapacity;
    }

    getCharTime():number{
        return this.maxCapacity/this.charPower;
    }
}

let b=new battery(2400,600,50);
console.log("Currenty charge level is "+ b.getCharPer()+ "%.");
console.log(b.getCharTime())