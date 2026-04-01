//abstract class=parent class
//abstract klassile viidates super.meetod
abstract class AbstractResistor{
    //this function must be created in child classes
    abstract getRestance():number;

    getCurrent(u:number):number{
        return u/this.getRestance();
    }
}

class Resistor extends AbstractResistor{
    r:number;
    
    constructor(r:number){
        super();
        this.r=r
    }

    getRestance():number{
        return this.r;
    } 

    
}

let Resistor1= new Resistor(220);
console.log("the resistance value of resistor 1 is "+Resistor1.getRestance());


class Switch extends AbstractResistor{
    //default state is the switch is off
    on:boolean=false;

    setOn(state:boolean){
        this.on=state;

    }/*
    getRestance():number{
       if (this.on) {
        return 0;
       } else{
        return 1000000000
       }
    }*/
      getRestance():number{
        return(this.on ? 0:1000000000);
    }

    getCurrent(u: number): number {
        if (u>0) {
            if (this.on) {
                throw new Error("Short circuit");
            }
        }

        return super.getCurrent(u);
    }

}
function printResistance(r:AbstractResistor){
    console.log(r.getRestance());
}
let s1=new Switch ();
console.log("the initial resistance value when it is off is "+s1.getRestance());
s1.setOn(true);
console.log("the initial resistance value when it is on is "+s1.getRestance());
s1.setOn(false);
try{
    console.log(s1.getCurrent(5));
} catch(e){
    console.log ("caught error:",(e as Error).message);
}
console.log(s1.getCurrent(6));
//current =u/resistance value(hetkel 0)=infitine

console.log(s1.getCurrent(6));
//current =u/resistance value(hetkel 1000000000)=5e-9 (0.000000005)
printResistance(s1);


abstract class MultibleConnections extends AbstractResistor{
    resistors: AbstractResistor[]=[];

    addResistor(r:AbstractResistor){
        this.resistors.push(r);
    }
}
class SeriesConnection extends MultibleConnections{
    //r + r2 + r3...jne kui palju resistoreid tuleb
     getRestance(): number {
          let totalResistance:number=0;
          for (let resistor of this.resistors){
            //get the resistance value of each resistors and add to th total
            totalResistance+=resistor.getRestance();
          }
          return totalResistance;
     }
}

let s=new SeriesConnection();
s.addResistor(new Resistor(220))
s.addResistor(new Resistor(320))
s.addResistor(new Resistor(120))
s.addResistor(new Resistor(20))


class ParalelConnection extends MultibleConnections{
    //1/r + 1/r2 + 1/r3...jne kui palju resistoreid tuleb
     getRestance(): number {
          let inverseSum:number=0;
          for (let resistor of this.resistors){
            //get the resistance value of each resistors and add to th total
            inverseSum+=1/resistor.getRestance();
          }
          return 1/inverseSum;
     }
}
let p=new ParalelConnection();
p.addResistor(new Resistor(220))
p.addResistor(new Resistor(320))
p.addResistor(new Resistor(120))
p.addResistor(new Resistor(20))

console.log("the resistance value of series connections  is "+s.getRestance()+" ohms.");
console.log("the resistance value of paralel connections1 is "+p.getRestance()+" ohms.");
