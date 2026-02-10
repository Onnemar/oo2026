//function1
function sayHello() {
    return "Hello Word";
}
var message1 = sayHello();
console.log(message1);
//function2
function multiply(a, b) {
    return a * b;
}
var result = multiply(3, 4);
console.log(result);
//function3
//calculate BMI = kg/m2
function BMI(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
console.log(BMI(171, 96));
console.log("too3");
var weights = [80, 85, 90, 95, 100, 105];
for (var _i = 0, weights_1 = weights; _i < weights_1.length; _i++) {
    var weight = weights_1[_i];
    console.log(+BMI(171, weight));
}
//map runs the given function once for each value n the array
//for each weight bmi is called
//th returned bmi values are collected into a new array aka map pärast jäevad vastused [] sisse
var BMIvalue = weights.map(function (weight) { return BMI(171, weight); });
console.log(BMIvalue);
//func 4- but different for bmi
//alternative formula for bmi
function bodyMassIndex(cm, kg) {
    var m = cm / 100;
    return 1.3 * kg / Math.pow(m, 2.5);
}
var bodyMassIndexValue = weights.map(function (weight) { return bodyMassIndex(171, weight); });
console.log(bodyMassIndexValue);
var results = [];
for (var height = 150; height <= 190; height += 2) {
    results.push([
        height,
        BMI(height, 96),
        bodyMassIndex(height, 96)
    ]);
}
console.log(results);
// Func 05
// Calculate the area of a circle
function circleArea(r) {
    var pi = 3.1415;
    // Area formula: π × r²
    var area = pi * Math.pow(r, 2);
    // Round to 2 decimal places
    var roundedArea = Math.round(area * 100) / 100;
    return roundedArea;
}
var r = 10;
var area = circleArea(r);
console.log("Area of the circle with radius " + r + " is " + area);
