function Average1(arv1, arv2, arv3) {
    return (arv1 + arv2 + arv3) / 3;
}
console.log(Average1(1, 2, 3));
function AverageArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(AverageArray([2, 4, 6, 4]));
function AvgArray(arr) {
    return arr.reduce(function (s, v) { return s + v; }, 0) / arr.length;
    //s=sum
    //V=currentvalue
    //0=starting value for sum
}
console.log(AvgArray([4, 8, 6, 3, 2, 7]));
//Sliding average 3 numbers (number ja naabrid)
function SlidingAverage(arr) {
    var out = [];
    for (var i = 0; i < arr.length - 2; i++) {
        out.push(Average1(arr[i], arr[i + 1], arr[i + 2]));
    }
    return out;
}
console.log(SlidingAverage([1, 2, 3, 4, 5, 20, 30]));
function SlidingAverage1(arr, windowSize) {
    if (windowSize === void 0) { windowSize = 4; }
    var out = [];
    for (var i = 0; i < arr.length - windowSize; i++) {
        out.push(AverageArray(arr.slice(i, i + windowSize))); //start and end
    }
    return out;
}
console.log(SlidingAverage1([1, 2, 3, 4, 5, 20, 30]));
