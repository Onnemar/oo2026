class Calculator{
    protected panel:string=""
    //what is currently on panel
    pressButton(b:string):void{  
        if (b==="C"){
            this.panel="0";
        }
        else{
            this.panel +=b;
        }
    }

    getPanelContent():string{
    return this.panel;
    }
}

export{
    Calculator
}