var aquarium = /** @class */ (function () {
    function aquarium(lenght, width, height) {
        this.lenght = lenght;
        this.width = width;
        this.height = height;
    }
    aquarium.prototype.getVolume = function () {
        return this.lenght * this.width * this.height;
    };
    return aquarium;
}());
var a = new aquarium(10, 10, 10);
console.log("The aquariums volume is " + a.getVolume() + "u²");
