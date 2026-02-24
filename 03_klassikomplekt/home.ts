class Addable1{
    protected width:number;
    protected height: number=30;

    constructor(
        protected l1:number,
        protected g:CanvasRenderingContext2D,
        //x position where the resistor is going to begin
        protected startx:number,
         //x position where the resistor is going to end
         protected endx: number,
         //how far down the screenwe going to draw the resistor. Y increases diagram go
         protected y:number
    ){
        this.width=this.endx-this.startx;
        this.draw();
    }
    

    draw(){
        //clear previous
        this.g.clearRect(this.startx, this.y-this.height/2, this.width,this.height);
        //================ Draw the rectangle=============
        //x,y,width,height
        const bodyX=this.startx+ this.width/4;
        const bodyY= this.y-this.height/2;
        const bodyW=this.width/2;
        const bodyH=this.height;
        this.g.beginPath();
        this.g.rect(bodyX,bodyY,bodyW,bodyH);
        this.g.stroke();
        this.g.fillText(this.l1+"Ω", bodyX+8, this.y+5);

    }
    //change the resistors resistanve value nr and redraw it
    setL1(l1:number){
        this.l1=l1;
        this.draw();
    }
    getL1():number{
        return this.l1;
    }
}
class Addable2{
    protected width:number;
    protected height: number=30;

    constructor(
        protected l2:number,
        protected g:CanvasRenderingContext2D,
        //x position where the resistor is going to begin
        protected startx:number,
         //x position where the resistor is going to end
         protected endx: number,
         //how far down the screenwe going to draw the resistor. Y increases diagram go
         protected y:number
    ){
        this.width=this.endx-this.startx;
        this.draw();
    }
    

    draw(){
        //clear previous
        this.g.clearRect(this.startx, this.y-this.height/2, this.width,this.height);
        //================ Draw the rectangle=============
        //x,y,width,height
        const bodyX=this.startx+ this.width/4;
        const bodyY= this.y-this.height/2;
        const bodyW=this.width/2;
        const bodyH=this.height;
        this.g.beginPath();
        this.g.rect(bodyX,bodyY,bodyW,bodyH);
        this.g.stroke();
        this.g.fillText(this.l2+"Ω", bodyX+8, this.y+5);

    }
    //change the resistors resistanve value nr and redraw it
    setL2(l2:number){
        this.l2=l2;
        this.draw();
    }
    getL2():number{
        return this.l2;
    }
}


class Total{
    protected width:number;
    protected height: number=30;

    constructor(
        protected r:number,
        protected g:CanvasRenderingContext2D,
        //x position where the resistor is going to begin
        protected startx:number,
         //x position where the resistor is going to end
         protected endx: number,
         //how far down the screenwe going to draw the resistor. Y increases diagram go
         protected y:number
    ){
        this.width=this.endx-this.startx;
        this.draw();
    }

    draw(){
        //clear previous
        this.g.clearRect(this.startx, this.y-this.height/2, this.width,this.height);
        //================ Draw the rectangle=============
        //x,y,width,height
        const bodyX=this.startx+ this.width/4;
        const bodyY= this.y-this.height/2;
        const bodyW=this.width/2;
        const bodyH=this.height;
        this.g.beginPath();
        this.g.rect(bodyX,bodyY,bodyW,bodyH);
        this.g.stroke();
        let s=this.r+this.r
        this.g.fillText(s+"Ω", bodyX+8, this.y+5);

    }
    //change the resistors resistanve value nr and redraw it
    setS(s:number){
        s=s;
        this.draw()
    }
    getS():number{
        return this.r+this.r;
    }
}