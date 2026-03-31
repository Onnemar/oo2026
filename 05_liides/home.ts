interface years{
    //x võib olla interfaceist väljas muu nimi. nt cm jne
  calculate(x1:number):number;

    inputUnit1():string;

    outputUnit():string;
}

class humanToDog implements years{
    calculate(humanAge:number):number{
        return humanAge*18; 
    }
    inputUnit1():string{
        return " human years";
    }
    outputUnit():string{
        return " dog years.";
    }
    
}
class dogToHuman implements years{
    calculate(animalAge:number):number{
        return animalAge/18; 
    }
    inputUnit1():string{
        return " dog years";
    }
    outputUnit():string{
        return " human years.";
    }
    
}
class humanToCat implements years{
    calculate(humanAge:number):number{
        return humanAge*19; 
    }
    inputUnit1():string{
        return " human years";
    }
    outputUnit():string{
        return " cat years.";
    }
    
}

class catToHuman implements years{
    calculate(animalAge:number):number{
        return animalAge/19; 
    }
    inputUnit1():string{
        return " cat years";
    }
    outputUnit():string{
        return " human years.";
    }
    
}
class humanToRabbit implements years{
    calculate(humanAge:number):number{
        return humanAge*20; 
    }
    inputUnit1():string{
        return " human years";
    }

    outputUnit():string{
        return " rabbit years.";
    }
    
}

class rabbitToHuman implements years{
    calculate(animalAge:number):number{
        return animalAge/20; 
    }
    inputUnit1():string{
        return " human years";
    }

    outputUnit():string{
        return " rabbit years.";
    }
    
}

class humanToHamster implements years{
    calculate(humanAge:number):number{
        return humanAge*14; 
    }
    inputUnit1():string{
        return " human years";
    }

    outputUnit():string{
        return " hamster years.";
    }
    
}

class hamsterToHuman implements years{
    calculate(animalAge:number):number{
        return animalAge/14; 
    }
    inputUnit1():string{
        return " human years";
    }

    outputUnit():string{
        return " hamster years.";
    }
    
}