//The programm is about calculates the average of people born with certain name per month. And 
// Data is taken from Statistikaamet, Nimede statistika (https://stat.ee/nimed/): Õnne, Õnnela, Paul
function AverageMonth(jan, veb, mar, apr, mai, juun, juul, aug, sep, okt, nov, det) {
    return (jan + veb + mar + apr + mai + juun + juul + aug + sep + okt + nov + det) / 12;
}
console.log("Average number of people named Õnne born each month across all years is " + Math.round(AverageMonth(39, 24, 40, 25, 36, 28, 20, 30, 26, 29, 29, 30)));
function AverageMonthArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log("Average number of people named Õnnela born each month across all years is " + Math.round(AverageMonthArray([13, 9, 5, 11, 12, 9, 10, 5, 6, 9, 8, 8])));
function AveragePerQuarter(arr, windowSize) {
    if (windowSize === void 0) { windowSize = 3; }
    var out = [];
    for (var i = 0; i <= arr.length - windowSize; i += windowSize) {
        out.push(Math.round(AverageMonthArray(arr.slice(i, i + windowSize))));
    }
    return out;
}
console.log("Average number of people named Paul born in each quarter across all years is " + AveragePerQuarter([84, 90, 92, 83, 108, 114, 97, 88, 74, 88, 77, 82]));
