//The programm is about calculates the average of people born with certain name per month. And 
// Data is taken from Statistikaamet, Nimede statistika (https://stat.ee/nimed/): Õnne, Õnnela, Paul

function AverageMonth (jan: number, veb:number,mar:number,apr: number, mai:number,juun:number,juul: number, aug:number,sep:number,okt: number, nov:number,det:number){
    return(jan+veb+mar+apr+mai+juun+juul+aug+sep+okt+nov+det)/12;
}


function AverageMonthArray(arr:number[]):number{
    return arr.reduce((s,v)=>s+v,0) /arr.length;
 
}

console.log("Average number of people named Õnne born each month across all years is "+Math.round(AverageMonthArray([39,24,40,25,36,28,20,30,26,29,29,30]))+".")


function onnelaAverage(arr:number[]):number[]{
    const out:number[]=[];

    for(let i=0; i<=arr.length-12; i++){
        out.push(Math.round(AverageMonth(arr[i], arr[i+1], arr[i+2],arr[i+3], arr[i+4], arr[i+5],arr[i+6], arr[i+7], arr[i+8],arr[i+9], arr[i+10], arr[i+11])));
    }
    return out;
}
console.log("Average number of people named Õnnela born each month across all years is "+onnelaAverage([13,9,5,11,12,9,10,5,6,9,8,8])+".");


function AveragePerQuarter (arr:number[], windowSize=3): number[]{
    const out:number[]=[];
    for(let i=0; i<=arr.length-windowSize;i+=windowSize){
    out.push(Math.round(AverageMonthArray(arr.slice(i, i+windowSize))));
    }
    return out;
}
console.log("Average number of people named Paul born in each quarter across all years is "+AveragePerQuarter([84,90,92,83,108,114,97,88,74,88,77,82])+".");
