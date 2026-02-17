//Võimalikult spetsiifilisel teemal rakendus, milles on vähemalt üks klass ning sellest vähemalt kaks eraldi juhitavat eksemplari.
//Keskmine rahvasuse esindajate arv maakonna kohta 2025 1.jan alguses
//The programm is about Estonia`s population according to data as of 01.01.2025 divided by nationalities. 
//The program shows the arithmetic average of ethnic representatives per county, 
// and the average number of ethnic representatives in each county.
// Data is taken from Statistikaamet (https://andmed.stat.ee/et/stat): RV022U: RAHVASTIK SOO, VANUSERÜHMA, RAHVUSE JA MAAKONNA JÄRGI, 1. JAANUAR [12.09.2025].
var population = /** @class */ (function () {
    function population(county, Estonian, Russian, Ukranian, Other, Unknown) {
        this.Estonian = Estonian;
        this.Russian = Russian;
        this.Ukranian = Ukranian;
        this.Other = Other;
        this.Unknown = Unknown;
    }
    //this mode is to show the grades
    population.prototype.show = function () {
        console.log(this.Estonian, this.Russian, this.Ukranian, this.Other, this.Unknown);
    };
    population.prototype.averagePopulation = function () {
        return (this.Estonian + this.Russian + this.Ukranian + this.Other + this.Unknown) / 5;
    };
    population.prototype.averageEstonian = function (count) {
        return this.Estonian / count;
    };
    population.prototype.averageRussian = function (count) {
        return this.Russian / count;
    };
    population.prototype.averageUkranian = function (count) {
        return this.Ukranian / count;
    };
    population.prototype.averageOther = function (count) {
        return this.Other / count;
    };
    population.prototype.averageUnknown = function (count) {
        return this.Unknown / count;
    };
    return population;
}());
var populations = [
    { county: "Harju county", Estonian: 388770, Russian: 161711, Ukranian: 45682, Other: 46950, Unknown: 3911 },
    { county: "Hiiu county", Estonian: 8144, Russian: 42, Ukranian: 56, Other: 95, unknown: 9 },
    { county: "Ida-Viru county", Estonian: 26427, Russian: 89220, Ukranian: 6604, Other: 7682, Unknown: 223 },
    { county: "Jõgeva county", Estonian: 24148, Russian: 1635, Ukranian: 812, Other: 378, Unknown: 58 },
    { county: "Järva county", Estonian: 27322, Russian: 624, Ukranian: 1285, Other: 485, Unknown: 99 },
    { county: "Lääne county", Estonian: 17686, Russian: 1400, Ukranian: 720, Other: 444, unknown: 108 },
    { county: "Lääne-Viru county", Estonian: 50113, Russian: 4753, Ukranian: 2604, Other: 132, Unknown: 273 },
    { county: "Põlva county", Estonian: 22076, Russian: 715, Ukranian: 515, Other: 207, Unknown: 40 },
    { county: "Pärnu county", Estonian: 76319, Russian: 5058, Ukranian: 3936, Other: 2071, Unknown: 363 },
    { county: "Rapla county", Estonian: 31387, Russian: 1005, Ukranian: 892, Other: 579, Unknown: 127 },
    { county: "Saare county", Estonian: 30351, Russian: 181, Ukranian: 665, Other: 383, Unknown: 224 },
    { county: "Tartu county", Estonian: 137049, Russian: 14308, Ukranian: 6572, Other: 6388, Unknown: 333 },
    { county: "Valga county", Estonian: 21488, Russian: 3138, Ukranian: 1197, Other: 1602, Unknown: 135 },
    { county: "Viljandi county", Estonian: 42172, Russian: 993, Ukranian: 1236, Other: 683, Unknown: 84 },
    { county: "Võru county", Estonian: 31273, Russian: 1036, Ukranian: 821, Other: 429, Unknown: 169 },
];
console.log(population);
