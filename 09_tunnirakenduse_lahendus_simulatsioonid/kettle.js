var Water = /** @class */ (function () {
    //constructor runs when new water object is created
    function Water(waterAmmount, temperature) {
        this.heatingPower = 0; //heater off at first. Heating power comes as watts
        this.specialHeatCapacity = 4200;
        this.waterAmmount = waterAmmount;
        this.temperature = temperature;
    }
    //method
    Water.prototype.setHeatingPower = function (newPower) {
        //power=dzaul/sek
        this.heatingPower = newPower;
    };
    //method for new temperature
    Water.prototype.getTemperature = function () {
        return this.temperature;
    };
    //this will simulate heating water for 1 sek.
    //it is going to increase the temperature based on power, water ammount, special heat capacity
    Water.prototype.heatPerSecond = function () {
        var joules = this.heatingPower;
        var dataTemperature = joules / (this.specialHeatCapacity * (this.waterAmmount / 1000));
        this.temperature += dataTemperature;
    };
    Water.prototype.calculateHeatingTime = function (targetTemperature) {
        //time=energy/power
        //power=this.heatingpower
        var temperatureDifference = targetTemperature - this.temperature;
        var jouleRequired = temperatureDifference * this.specialHeatCapacity * (this.waterAmmount / 1000);
        var timeInSeconds = jouleRequired / this.heatingPower;
        return timeInSeconds;
    };
    return Water;
}());
var w = new Water(800, 20);
console.log(w.getTemperature());
w.setHeatingPower(1500);
console.log("after setting the heating power: " + w.getTemperature());
w.heatPerSecond();
console.log("after heating fr 1 sek " + w.getTemperature());
var heatingTime = w.calculateHeatingTime(80);
console.log(heatingTime);
