var student = /** @class */ (function () {
    function student(mathGrade, englishGrade) {
        this.mathGrade = mathGrade;
        this.englishGrade = englishGrade;
    }
    //this mode is to show the grades
    student.prototype.show = function () {
        console.log(this.mathGrade, this.englishGrade);
    };
    //write a method to calculate average
    student.prototype.average = function () {
        return (this.mathGrade + this.englishGrade) / 2;
    };
    //write a method to add the grades of the same subject
    student.prototype.add = function (other) {
        return new student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade);
    };
    student.prototype.averageMath = function (count) {
        return this.mathGrade / count;
    };
    student.prototype.improveMath = function () {
        this.mathGrade += 5;
        //this.mathGrade = this.mathGrade+5;
    };
    return student;
}());
var student1 = new student(67, 70);
var student2 = new student(59, 80);
//array of students
var students = [
    new student(15, 39),
    new student(10, 90),
    new student(98, 75),
];
//combine all students into one total
var classTotal = students[0];
for (var i = 0; i < students.length; i++) {
    classTotal = classTotal.add(students[i]);
}
//number of students
var n = students.length;
console.log("class average ", classTotal.averageMath(n));
//console.log(student1.mathGrade)
student1.show();
console.log("This is the average of student1 " + student1.average());
//test adding other student grades
var combined = student1.add(student2);
combined.show();
console.log("Average of both students " + combined.averageMath(2));
student1.improveMath();
student1.show();
