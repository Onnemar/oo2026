class Shop{
openingTime:number;
closingTime:number;
visitorTime:number;
visitorsAtFirst:number=0;
constructor (openingTime:number, closingTime:number, visitorTime:number,){
    this.openingTime=openingTime;
    this.closingTime=closingTime;
    this.visitorTime=visitorTime;
}

isOpen(){
if (this.openingTime < this.visitorTime && this.visitorTime < this.closingTime) {
    
    return String ("Store is opened");

} else {
    return String ("Store is closed");
}
}

visit(visitorTime:number):number{
    if (this.openingTime < visitorTime && this.visitorTime < this.closingTime){}
    let visitorAtTime=1;
    let newVisitors=this.visitorsAtFirst+=visitorAtTime;
    newVisitors=this.visitorsAtFirst;
    return newVisitors;}
}


let s1 =new Shop(9,15,10);
s1.visit(13);
s1.visit(13);
s1.visit(13);
s1.visit(13);
s1.visit(19);
console.log(s1.isOpen())

console.log(s1.visit(11))