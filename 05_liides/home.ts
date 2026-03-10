//fabCalc- fabric calculation
interface fabCalc{
    //x võib olla interfaceist väljas muu nimi. nt cm jne
    calculate(x:number):number;

    inputUnit():string;

    outputUnit():string;
}

class density implements fabCalc{
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

//warp width
class warpWid implements fabCalc{
    calculate(finished:number):number{
        return finished*1.05; 
    }
    inputUnit():string{
        return "without shrinkage";
    }
    outputUnit():string{
        return "with shrinkage";
    }
}  

//warp quantity (mitu lõime)
//density*width+(2+2 äärelõime)
class warpQuan implements fabCalc{
    calculate(quantity:number):number{
        return 2+density.outputUnit*warpWid.outputUnit+2; 
    }
    outputUnit():string{
        return "warpPerCm";
    }
}
    //warp lenght + shrinkage
class warpLen implements fabCalc{
    calculate(finished2:number):number{
        return finished2*1.2; 
    }
    inputUnit():string{
        return "without shrinkage";
    }
    outputUnit():string{
        return "with shrinkage";
    }
}
//full warp lenght
class fullLen implements fabCalc{
    calculate(fullWarpLen):number{
        return 2+density.outputUnit*warpWid.outputUnit+2; 
    }
    outputUnit():string{
        return "cm";
    }
}