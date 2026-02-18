class Resistor {
    protected r:number;
    protected g;

    constructor(r:number, g:CanvasRenderingContext2D){
        this.r=r;
        this.g=g;
        this.draw();
    }

    draw(){
        //start drawing a new shape
        this.g.beginPath()
        //50-x position(deistance from left of canvas)
        //10-y position(distance from top)
        //100- width of rectangle
        //30- height of rectangle
        this.g.rect(50,10,100,30);
        this.g.stroke();
        //fillText (text,x,y)
        this.g.fillText("" +this.r, 80, 28);
    }

}