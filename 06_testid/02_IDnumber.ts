export class IDCode{
    constructor(protected code:string){}

    gender(){
        //(this.code[0]) take the first character of id
        //parse convert to a number
        //if number is even/divided by2(paaris). return female female
        //if odd, return male
        return parseInt(this.code[0])%2===0?"F":"M";
    }
}