class student {
    constructor(protected mathGrade: number, protected englishGrade: number){}
//this mode is to show the grades
    show(): void{
        console.log( this.mathGrade,  this.englishGrade);
    }
//write a method to calculate average
average():number{

    return(this.mathGrade + this.englishGrade)/2;
    }

    //write a method to add the grades of the same subject
    add(other: student):student{
        return new student(this.mathGrade +  other.mathGrade, this.englishGrade + other.englishGrade);
    }

    averageMath(count:number):number{
        return this. mathGrade/count;
    }
    improveMath():void{
        this.mathGrade += 5;
        //this.mathGrade = this.mathGrade+5;
    }
}

let student1: student=new student(67,70);
let student2: student= new student(59,80);

//array of students
let students: student[]=[
    new student(15,39),
    new student(10,90),
    new student(98,75),
]
//combine all students into one total
let classTotal=students[0];

for(let i=0; i<students.length; i++){
    classTotal=classTotal.add(students [i]);
}
//number of students
const n=students.length;
console.log("class average ", classTotal.averageMath(n));

//console.log(student1.mathGrade)
student1.show();
console.log("This is the average of student1 " + student1.average());
//test adding other student grades

let combined=student1.add(student2);
combined.show();
console.log("Average of both students "+ combined.averageMath(2));

student1. improveMath();
student1.show();