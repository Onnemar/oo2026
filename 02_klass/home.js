//Võimalikult spetsiifilisel teemal rakendus, milles on vähemalt üks klass ning sellest vähemalt kaks eraldi juhitavat eksemplari.
//Keskmine rahvasuse esindajate arv maakonna kohta 2025 1.jan alguses
//The programm is about Estonia`s population according to data as of 01.01.2025 divided by nationalities. 
//The program shows the arithmetic average of ethnic representatives per county, 
// and the average number of ethnic representatives in each county.
// Data is taken from Statistikaamet (https://andmed.stat.ee/et/stat): RV022U: RAHVASTIK SOO, VANUSERÜHMA, RAHVUSE JA MAAKONNA JÄRGI, 1. JAANUAR [12.09.2025].
var County = /** @class */ (function () {
    function County(name, Estonian, Russian, Ukranian, Other, Unknown) {
        this.name = name;
        this.Estonian = Estonian;
        this.Russian = Russian;
        this.Ukranian = Ukranian;
        this.Other = Other;
        this.Unknown = Unknown;
    }
    //this mode is to show the population numbers
    County.prototype.show = function () {
        console.log(this.name, this.Estonian, this.Russian, this.Ukranian, this.Other, this.Unknown);
    };
    //Average number in nationalities per a specific county.
    County.prototype.averagePopulation = function () {
        return (this.Estonian + this.Russian + this.Ukranian + this.Other + this.Unknown) / 5;
    };
    //Average number of specific nationality in all counties.
    County.prototype.averageEstonian = function (count) {
        return this.Estonian / count;
    };
    County.prototype.averageRussian = function (count) {
        return this.Russian / count;
    };
    County.prototype.averageUkranian = function (count) {
        return this.Ukranian / count;
    };
    County.prototype.averageOther = function (count) {
        return this.Other / count;
    };
    County.prototype.averageUnknown = function (count) {
        return this.Unknown / count;
    };
    return County;
}());
var Counties = [
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
for (var _i = 0, Counties_1 = Counties; _i < Counties_1.length; _i++) {
    var c = Counties_1[_i];
    console.log(c.name + " has average amount of people per nationality " + c.averagePopulation());
}
console.log("----------");
var countyCount = Counties.length;
// Summeerime kõik keskmised korraga
var avgEstonian = 0;
var avgRussian = 0;
var avgUkrainian = 0;
var avgOther = 0;
var avgUnknown = 0;
for (var _a = 0, Counties_2 = Counties; _a < Counties_2.length; _a++) {
    var c = Counties_2[_a];
    avgEstonian += c.averageEstonian(1); // jagame ühega, et saada täisarv
    avgRussian += c.averageRussian(1);
    avgUkrainian += c.averageUkranian(1); // sinu meetod on veel vana nimega
    avgOther += c.averageOther(1);
    avgUnknown += c.averageUnknown(1);
}
// Jagame maakondade arvuga, et saada keskmine üle kõikide maakondade
avgEstonian /= countyCount;
avgRussian /= countyCount;
avgUkrainian /= countyCount;
avgOther /= countyCount;
avgUnknown /= countyCount;
console.log("Average of Estonians per county: " + avgEstonian +
    ", Average of Russians per county: " + avgRussian +
    ", Average of Ukrainians per county: " + avgUkrainian +
    ", Average of Other per county: " + avgOther +
    ", Average of Unknown per county: " + avgUnknown);
