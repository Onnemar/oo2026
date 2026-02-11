//gpa calculator
class course{
    constructor(protected credits:number){}

    //method including the formula to calculate the gpa
    //formula is: grade * credits

    gpaContribution(grade:number):number{
        return grade*this.credits;
    }

    getCredits(): number{
        return this.credits;
    }

}

let math = new course(4);
let english= new course (6);
let programming= new course(2);

//
let MathGrade=4.0;
let EnglishGrade=3.3;
let ProgrammingGrade=3.7;

let totalPoints=0;

totalPoints+=math.gpaContribution(MathGrade);
totalPoints+=english.gpaContribution(EnglishGrade);
totalPoints+=programming.gpaContribution(ProgrammingGrade);

let totalCredits=math.getCredits() +english.getCredits() +programming.getCredits();

//totalpoints/total credits
let gpa=totalPoints/totalCredits;
console.log("My total gpa is "+gpa)

//create array to pass grades of several students
let students1 = [
    {name:"Mari", math:4.0, english:3.3,programming:3.7},
    {name:"Jüri", math:3.0, english:3.3,programming:2.7},
    {name:"Kari", math:3.3, english:3.8,programming:3.2},
];

//calculate gpa for each student
for(let student of students1){
    let totalPoints=0;

    totalPoints+=math.gpaContribution(student.math);
    totalPoints+=english.gpaContribution(student.english);
    totalPoints+=programming.gpaContribution(student.programming);

    let gpa=totalPoints/totalCredits;

    console.log(student.name +" gpa "+gpa)
}