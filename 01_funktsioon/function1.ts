//function1
function sayHello(){
    return "Hello Word";
}

let message1 =sayHello();
console.log(message1);

//function2

function multiply (a:number, b:number){
    return a*b
}

let result = multiply(3,4);
console.log(result);

//function3
//calculate BMI = kg/m2
function BMI (cm:number, kg:number):number{
let m:number = cm/100
return kg/(m * m);
}
console.log(BMI(171,96));
console.log("too3");


let weights:number[]=[80,85,90,95,100,105]

for(let weight of weights){
    console.log(+BMI(171,weight))
}

//map runs the given function once for each value n the array
//for each weight bmi is called
//th returned bmi values are collected into a new array aka map pärast jäevad vastused [] sisse
let BMIvalue: number [] =weights.map(weight=>BMI(171, weight))
console.log(BMIvalue);

//func 4- but different for bmi
//alternative formula for bmi
function bodyMassIndex (cm:number ,kg:number):number{
    let m:number =cm/100;
    return 1.3*kg/Math.pow(m,2.5);
}
let bodyMassIndexValue: number [] =weights.map(weight=>bodyMassIndex(171, weight))
console.log(bodyMassIndexValue);

let results: number[][]=[];

for(let height=150; height<=190;height+=2){
    results.push([
        height,
        BMI(height,96),
        bodyMassIndex(height,96)
    ])
}
console.log(results);

// Func 05
// Calculate the area of a circle
function circleArea(r: number): number {
    const pi: number = 3.1415;

    // Area formula: π × r²
    let area: number = pi * Math.pow(r, 2);

    // Round to 2 decimal places
    let roundedArea: number = Math.round(area * 100) / 100;

    return roundedArea;
}

let r: number = 10;
let area: number = circleArea(r);

console.log("Area of the circle with radius " + r + " is " + area);