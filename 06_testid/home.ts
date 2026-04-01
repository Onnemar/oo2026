
//fabCalc- fabric calculation
interface fabCalc1{
    //x võib olla interfaceist väljas muu nimi. nt cm jne
    calculate(x:number):number;
    inputUnit1():string;
    outputUnit1():string;
}
interface fabCalc2{
    //x võib olla interfaceist väljas muu nimi. nt cm jne
    calculate(x1:number,x2:number):number;
    inputUnit2():string;
    inputUnit22():string;
    outputUnit2():string;
}
interface fabCalc3{
    //x võib olla interfaceist väljas muu nimi. nt cm jne
    calculate(x1:number,x2:number,x3:number):number;
    inputUnit3():string;
    inputUnit33():string;
    inputUnit333():string;
    outputUnit3():string;
}
//fabCalc1
//density(tihedus)
class density implements fabCalc1{
    calculate(reed:number):number{
        return reed/10; 
    }
    inputUnit1():string{
        return " reed nr, ";
    }
    outputUnit1():string{
        return "warps per cm.";
    }  
}

//full warp length(1lõime pikkus)
//pikkus*1,2+25+50
class warpLen implements fabCalc1{
    calculate(finishedLen:number):number{
        return 25+(finishedLen*1.2)+50; 
    }
    inputUnit1():string{
        return " intended lenght of fabric in cm, ";
    }
    outputUnit1():string{
        return " full lenght of the warp in cm.";
    }
}


//fabCalc2
//warp quantity (mitu lõime)
//tihedus*laius+(2+2 äärelõime)
class warpQuan implements fabCalc2{

    calculate(reed:number, width:number):number{
        return 2+(reed/10)*(width*1.05)+2; 
    }
     inputUnit2():string{
        return " reed nr, ";
     }
     inputUnit22():string{
        return " intended width of fabric in cm, ";
     }
    outputUnit2():string{
        return " number of warp threads needed.";
    }
}



//fabCalc3
//warp material ammount
class warpMat implements fabCalc3{
    calculate(reed:number, width:number,finishedLen:number):number{
        return (2+(reed/10)*(width*1.05)+2)+(25+(finishedLen*1.2)+50)
    }
    inputUnit3():string{
        return " reed nr, ";
     }
    inputUnit33():string{
        return " intended width of fabric in cm, ";
     }
    inputUnit333():string{
        return " intended lenght of fabric in cm, ";
    }
    outputUnit3():string{
        return " m of warp material needed.";
    }
}
//weft material ammount
class weftMat implements fabCalc3{
    calculate(reed:number, finishedWid:number, finishedLen:number):number{
        return (reed/10)*(finishedWid*1.05)+(25+(finishedLen*1.2)+50);
    }
    inputUnit3():string{
        return " reed nr, ";
    }
    inputUnit33():string{
        return " intended width of fabric in cm, ";
    }
    inputUnit333():string{
        return " intended lenght of fabric in cm, ";
    }
    outputUnit3():string{
        return " m of weft material needed.";
    }
}
export{
    density,
    warpLen,
    warpQuan,
    warpMat,
    weftMat
}
