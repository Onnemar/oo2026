//Võimalikult spetsiifilisel teemal rakendus, milles on vähemalt üks klass ning sellest vähemalt kaks eraldi juhitavat eksemplari.
//Keskmine rahvasuse esindajate arv maakonna kohta 2025 1.jan alguses

//The programm is about Estonia`s population according to data as of 01.01.2025 divided by nationalities. 
//The program shows the arithmetic average of ethnic representatives per county, 
// and the average number of ethnic representatives in each county.
// Data is taken from Statistikaamet (https://andmed.stat.ee/et/stat): RV022U: RAHVASTIK SOO, VANUSERÜHMA, RAHVUSE JA MAAKONNA JÄRGI, 1. JAANUAR [12.09.2025].

class County {
    constructor(public name: string, protected Estonian: number, protected Russian: number, protected Ukrainian: number, protected Other: number, protected Unknown: number) {}
    //this mode is to show the population numbers
    show(): void {
        console.log(this.name, this.Estonian, this.Russian, this.Ukrainian, this.Other, this.Unknown);
    }

//Average number in nationalities per a specific county.
    averagePopulation():number{
        return(this.Estonian+ this.Russian+ this.Ukrainian+ this.Other+this.Unknown)/5;
    }

    getPopulation(): { Estonian: number, Russian: number, Ukrainian: number, Other: number, Unknown: number } {
        return {Estonian: this.Estonian, Russian: this.Russian, Ukrainian: this.Ukrainian, Other: this.Other, Unknown: this.Unknown}
    }
}

let Counties: County[] = [
    new County("Harju county", 388770, 161711, 45682, 46950, 3911),
    new County("Hiiu county", 8144, 42, 56, 95, 9),
    new County("Ida-Viru county", 26427, 89220, 6604, 7682, 223),
    new County("Jõgeva county", 24148, 1635, 812, 378, 58),
    new County("Järva county", 27322, 624, 1285, 485, 99),
    new County("Lääne county", 17686, 1400, 720, 444, 108),
    new County("Lääne-Viru county", 50113, 4753, 2604, 132, 273),
    new County("Põlva county", 22076, 715, 515, 207, 40),
    new County("Pärnu county", 76319, 5058, 3936, 2071, 363),
    new County("Rapla county", 31387, 1005, 892, 579, 127),
    new County("Saare county", 30351, 181, 665, 383, 224),
    new County("Tartu county", 137049, 14308, 6572, 6388, 333),
    new County("Valga county", 21488, 3138, 1197, 1602, 135),
    new County("Viljandi county", 42172, 993, 1236, 683, 84),
    new County("Võru county", 31273, 1036, 821, 429, 169),
];

for (const c of Counties) {
    console.log(
        c.name + " has average amount of people per nationality " + c.averagePopulation()
    );
}

console.log("----------")

const countyCount = Counties.length;


//combine nationalities population into total
let averageEstonian = 0;
let averageRussian = 0;
let averageUkrainian = 0;
let averageOther = 0;
let averageUnknown = 0;

for (const c of Counties) {

    const population = c.getPopulation();
    averageEstonian += population.Estonian/countyCount;
    averageRussian += population.Russian/countyCount;
    averageUkrainian += population.Ukrainian/countyCount;
    averageOther += population.Other/countyCount;
    averageUnknown += population.Unknown/countyCount;
}


console.log("Average of Estonians per county " + averageEstonian + " average of Russians per county " + averageRussian + " average of Ukranians per county " + averageUkrainian +" average of other nationalities per county " + averageOther +" average of people of unknown nationality per county " + averageUnknown + ".");