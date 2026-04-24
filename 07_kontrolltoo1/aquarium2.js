var aquarium = /** @class */ (function () {
    function aquarium(lenght, width, height) {
        this.firstWater = 0;
        this.lenght = lenght;
        this.width = width;
        this.height = height;
    }
    aquarium.prototype.getVolume = function () {
        return this.lenght * this.width * this.height;
    };
    aquarium.prototype.addWater = function (waterAdded) {
        var newWater = this.firstWater += waterAdded;
        if (newWater > a.getVolume()) {
            console.log("You addded  " + waterAdded + "u3 of water into the aquarium. Water is overflowing by " + (newWater - a.getVolume()) + "u²");
            return a.getVolume();
        }
        else {
            console.log("You addded  " + waterAdded + "u3 of water into the aquarium");
            return newWater;
        }
    };
    return aquarium;
}());
var a = new aquarium(10, 10, 10);
console.log("The aquariums volume is " + a.getVolume() + "u² ");
a.addWater(600);
a.addWater(20);
console.log("Total ammount of water in the aquarium is " + a.addWater(3000) + "u3");
//console.log("You added  "+a.addWater(2000000)+"u2 of water into the aquarium")
