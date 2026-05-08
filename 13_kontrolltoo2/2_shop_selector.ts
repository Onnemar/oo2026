class Shop1{
shopName:string;
openingTime:number;
closingTime:number;

constructor (shopName:string, openingTime:number, closingTime:number){
    this.shopName=shopName;
    this.openingTime=openingTime;
    this.closingTime=closingTime;
}
getOpening(): number{return this.openingTime;}
getClosing(): number{return this.closingTime;}
}

class Chain1{
    stores: Shop1[];
    constructor(){
        this.stores=[];
        

    }
    addStore(store:Shop1):void{
        this.stores.push(store);
    }

    getStores():Shop1[]{
        return this.stores;
    }
}

const s11 =new Shop1("Meri",9,15);
const s22 =new Shop1("Maa",9,15);
const s33 =new Shop1("Mee",9,15);

const ch1=new Chain1();
ch1.addStore(s11);
ch1.addStore(s22);
ch1.addStore(s33);


console.log(ch1.getStores());