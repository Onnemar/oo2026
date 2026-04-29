//kassa. toote nimi, hind
//kliendikaart
//kaart: niisama
//sula: ümarda 5sendini
abstract class cashRegister{

    abstract getProductName():string;

    abstract getPrice():number;


}

class realPrice extends cashRegister{
    productName:string;
    price:number;
    
    constructor(productName:string, price:number){
        super(); 
        this.productName=productName;
        this.price=price; 
    }

    getProductName(){
        return this.productName;
    }

    getPrice():number{
        return this.price;
    }   
}
let rp= new realPrice("Milk", 1.29);
console.log (rp.getProductName()+" costs "+rp.getPrice()+" €.")

class clientCard extends cashRegister{
    //default state is the switch is off
    clientCard:boolean=false;
    productName:string;
    price:number;
    
    constructor(productName:string, price:number){
        super(); 
        this.productName=productName;
        this.price=price; 
    }

    setclientCard(state:boolean){
        this.clientCard=state;

    }

    getProductName(){
        return this.productName;
    }

    getPrice():number{
        return Number((this.clientCard ? this.price*0.8: this.price).toFixed(2));
    }
}

let cc=new clientCard("bread", 1.48);
console.log("The initial price of "+cc.getProductName()+" is "+cc.getPrice()+"€.");
cc.setclientCard(true);
console.log("The price of "+cc.getProductName()+" with using client card is "+cc.getPrice()+"€.");

class paymentMethod extends cashRegister{
    //default state is the switch is off
    cash:boolean=false;
    productName:string;
    price:number;
    
    constructor(productName:string, price:number){
        super(); 
        this.productName=productName;
        this.price=price; 
    }

    setCash(state:boolean){
        this.cash=state;

    }

    getProductName(){
        return this.productName;
    }

      getPrice():number{
        return Number((this.cash ?  Math.round(this.price/0.05)*0.05: this.price).toFixed(2));
    }
}

let pm=new paymentMethod("rice",3.17);
console.log("If paid with card, "+pm.getProductName()+" costs "+pm.getPrice()+"€.");
pm.setCash(true);
console.log("If paid with cash, "+pm.getProductName()+" costs "+pm.getPrice()+"€.");