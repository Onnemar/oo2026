class aquarium{
    lenght:number;
    width:number;
    height:number;

    constructor(lenght:number, width:number, height:number){
        this.lenght= lenght;
        this.width= width;
        this.height= height;
    }

    getVolume(){
        return this.lenght*this.width*this.height;
    }
}

let a= new aquarium(10, 10, 10);
console.log("The aquariums volume is "+a.getVolume()+"u²")