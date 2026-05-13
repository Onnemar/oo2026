class CashRegister{
    cashInside: number;
    taxRate: number;
    cardMoney: number = 0;
    scannerStatus: boolean = false;

    //constructor runs when new water object is created
    constructor(cashInside: number, taxRate: number){
        this.cashInside = cashInside;
        this.taxRate = taxRate;
    }
    scannerOn(): void{
        this.scannerStatus = true;
    }

    scannerOff(): void{
        this.scannerStatus = false;
    }
        
    
    getCashAmount(){
        return this.cashInside;
    }

    getCardAmount(){
        return this.cardMoney;
    }

    fiveCents(amount: number): number {
        return Number((Math.round(amount * 100) / 100).toFixed(2));
    }
    
    card(price: number) {
        if (!this.scannerStatus) {
        console. log ("Scanner is off");
         return;
        }
        let paidPrice = price + (price * this.taxRate / 100);
        paidPrice = Math.round(paidPrice * 100) / 100;

        this.cardMoney += paidPrice;
        return paidPrice;
    }

    cash(paid: number, price: number){
        if (!this.scannerStatus) {
            console.log ("Scanner is off, try again");
            return;
        }


        let paidPrice = price + (price *this.taxRate/100);
        paidPrice = this.fiveCents(paidPrice);
        let changeBack = paid - paidPrice;
        changeBack = this.fiveCents(changeBack);

        if (changeBack >= 0) {
            this.cashInside += paidPrice;
            return changeBack;
        } else {
            console.log("not enough money paid");
            return 0;
        }         
    }
}


let cr = new CashRegister(10,24);
console.log("There is "+ cr.getCashAmount() + "€ inside.");

cr.scannerOn();

cr.card(1.78);

console.log("There is "+ cr.getCashAmount() + "€ inside and " + cr.getCardAmount() + "€ paid by card.");

cr.cash(10.12, 2)
console.log("There is "+ cr.getCashAmount() + "€ inside and " + cr.getCardAmount() + "€ paid by card.");
cr.scannerOff();
cr.cash(1.12, 2)
console.log("There is "+ cr.getCashAmount() + "€ inside and " + cr.getCardAmount() + "€ paid by card.");