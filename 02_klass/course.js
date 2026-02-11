//gpa calculator
var course = /** @class */ (function () {
    function course(credits) {
        this.credits = credits;
    }
    //method including the formula to calculate the gpa
    //formula is: grade * credits
    course.prototype.gpaContribution = function (grade) {
        return grade * this.credits;
    };
    course.prototype.getCredits = function () {
        return this.credits;
    };
    return course;
}());
var math = new course(4);
var english = new course(6);
var programming = new course(2);
//
var MathGrade = 4.0;
var EnglishGrade = 3.3;
var ProgrammingGrade = 3.7;
var totalPoints = 0;
totalPoints += math.gpaContribution(MathGrade);
totalPoints += english.gpaContribution(EnglishGrade);
totalPoints += programming.gpaContribution(ProgrammingGrade);
var totalCredits = math.getCredits() + english.getCredits() + programming.getCredits();
//totalpoints/total credits
var gpa = totalPoints / totalCredits;
console.log("My total gpa is " + gpa);
//create array to pass grades of several students
var students1 = [
    { name: "Mari", math: 4.0, english: 3.3, programming: 3.7 },
    { name: "Jüri", math: 3.0, english: 3.3, programming: 2.7 },
    { name: "Kari", math: 3.3, english: 3.8, programming: 3.2 },
];
//calculate gpa for each student
for (var _i = 0, students1_1 = students1; _i < students1_1.length; _i++) {
    var student = students1_1[_i];
    var totalPoints_1 = 0;
    totalPoints_1 += math.gpaContribution(student.math);
    totalPoints_1 += english.gpaContribution(student.english);
    totalPoints_1 += programming.gpaContribution(student.programming);
    var gpa_1 = totalPoints_1 / totalCredits;
    console.log(student.name + " gpa " + gpa_1);
}
