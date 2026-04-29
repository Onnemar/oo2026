class Water{
    waterAmmount:number;
    temperature:number;
    heatingPower:number =0; //heater off at first. Heating power comes as watts
    readonly specialHeatCapacity:number= 4200;

    //constructor runs when new water object is created
    constructor(waterAmmount:number, temperature:number){
        this.waterAmmount=waterAmmount;
        this.temperature=temperature;
    }

        //method
    setHeatingPower(newPower:number):void{
        //power=dzaul/sek
        this.heatingPower=newPower;
    }

//method for new temperature
    getTemperature():number{
            return this.temperature;
    }
//this will simulate heating water for 1 temp.
//it is going to increase the temperature based on power, water ammount, special heat capacity
    heatPerSecond():void{
        let joules=this.heatingPower;
        let dataTemperature= joules/(this.specialHeatCapacity*(this.waterAmmount/1000));
        this.temperature+=dataTemperature;
    }

    calculateHeatingTime(targetTemperature:number):number{
//time=energy/power
//power=this.heatingpower
        let temperatureDifference=targetTemperature-this.temperature;
        let jouleRequired= temperatureDifference*this.specialHeatCapacity* (this.waterAmmount/1000);
        let timeInSeconds=jouleRequired/this.heatingPower;
        return timeInSeconds
    }
    }

    let w =new Water(800,20);
    console.log(w.getTemperature())
    w.setHeatingPower(1500);
    console.log("after setting the heating power: "+w.getTemperature());
    w.heatPerSecond();
    console.log("after heating fr 1 sek " +w.getTemperature());
    let heatingTime=w.calculateHeatingTime(80);
    console.log(heatingTime)
