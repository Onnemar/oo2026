
//fabCalc- fabric calculation
interface fabCalc1{
    //x võib olla interfaceist väljas muu nimi. nt cm jne
    calculate(x:number):number;
    inputUnit():string;
    outputUnit():string;
}
interface fabCalc2{
    //x võib olla interfaceist väljas muu nimi. nt cm jne
    calculate(x1:number,x2:number):number;
    inputUnit1():string;
    inputUnit2():string;
    outputUnit1():string;
}
interface fabCalc3{
    //x võib olla interfaceist väljas muu nimi. nt cm jne
    calculate(x1:number,x2:number,x3:number):number;
    inputUnit1():string;
    inputUnit2():string;
    inputUnit3():string;
    outputUnit():string;
}

//density(tihedus)
class density implements fabCalc1{
    calculate(reed:number):number{
        return reed/10; 
    }
    inputUnit():string{
        return "reed nr";
    }
    outputUnit():string{
        return "warpPerCm";
    }  
}


//warp quantity (mitu lõime)
//tihedus*laius+(2+2 äärelõime)
class warpQuan implements fabCalc2{

    calculate(reed:number, width:number):number{
        return 2+(reed/10)*(width*1.05)+2; 
    }
     inputUnit1():string{
        return "reed nr";
     }
     inputUnit2():string{
        return "fabric end width";
     }
    outputUnit():string{
        return "number of warp threads";
    }
}


//full warp length(1lõime pikkus)
//pikkus*1,2+25+50
class warpLen implements fabCalc1{
    calculate(finishedLen:number):number{
        return 25+(finishedLen*1.2)+50; 
    }
    inputUnit():string{
        return "without shrinkage in cm";
    }
    outputUnit():string{
        return "cm";
    }
}

//warp material ammount
class warpMat implements fabCalc3{
    calculate(reed:number, width:number,finishedLen:number):number{
        return (2+(reed/10)*(width*1.05)+2)+(25+(finishedLen*1.2)+50)
    }
    inputUnit1():string{
        return "reed nr";
     }
    inputUnit2():string{
        return "fabric end width";
     }
    inputUnit3():string{
        return "without shrinkage in cm";
    }
    outputUnit():string{
        return "cm";
    }
}
//weft material ammount
class weftpMat implements fabCalc3{
    calculate(reed:number, finishedWid:number, finishedLen:number):number{
        return (reed/10)*(finishedWid*1.05)+(25+(finishedLen*1.2)+50);
    }
    inputUnit1():string{
        return "reed nr";
    }
    inputUnit2():string{
        return "without shrinkage";
    }
    inputUnit3():string{
        return "without shrinkage in cm";
    }
    outputUnit():string{
        return "cm";
    }
}
