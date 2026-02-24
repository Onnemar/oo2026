var Addable1 = /** @class */ (function () {
    function Addable1(l1, g, 
    //x position where the resistor is going to begin
    startx, 
    //x position where the resistor is going to end
    endx, 
    //how far down the screenwe going to draw the resistor. Y increases diagram go
    y) {
        this.l1 = l1;
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        this.height = 30;
        this.width = this.endx - this.startx;
        this.draw();
    }
    Addable1.prototype.draw = function () {
        //clear previous
        this.g.clearRect(this.startx, this.y - this.height / 2, this.width, this.height);
        //================ Draw the rectangle=============
        //x,y,width,height
        var bodyX = this.startx + this.width / 4;
        var bodyY = this.y - this.height / 2;
        var bodyW = this.width / 2;
        var bodyH = this.height;
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();
        this.g.fillText(this.l1 + "Ω", bodyX + 8, this.y + 5);
    };
    //change the resistors resistanve value nr and redraw it
    Addable1.prototype.setL1 = function (l1) {
        this.l1 = l1;
        this.draw();
    };
    Addable1.prototype.getL1 = function () {
        return this.l1;
    };
    return Addable1;
}());
var Addable2 = /** @class */ (function () {
    function Addable2(l2, g, 
    //x position where the resistor is going to begin
    startx, 
    //x position where the resistor is going to end
    endx, 
    //how far down the screenwe going to draw the resistor. Y increases diagram go
    y) {
        this.l2 = l2;
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        this.height = 30;
        this.width = this.endx - this.startx;
        this.draw();
    }
    Addable2.prototype.draw = function () {
        //clear previous
        this.g.clearRect(this.startx, this.y - this.height / 2, this.width, this.height);
        //================ Draw the rectangle=============
        //x,y,width,height
        var bodyX = this.startx + this.width / 4;
        var bodyY = this.y - this.height / 2;
        var bodyW = this.width / 2;
        var bodyH = this.height;
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();
        this.g.fillText(this.l2 + "Ω", bodyX + 8, this.y + 5);
    };
    //change the resistors resistanve value nr and redraw it
    Addable2.prototype.setL2 = function (l2) {
        this.l2 = l2;
        this.draw();
    };
    Addable2.prototype.getL2 = function () {
        return this.l2;
    };
    return Addable2;
}());
var Total = /** @class */ (function () {
    function Total(r, g, 
    //x position where the resistor is going to begin
    startx, 
    //x position where the resistor is going to end
    endx, 
    //how far down the screenwe going to draw the resistor. Y increases diagram go
    y) {
        this.r = r;
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        this.height = 30;
        this.width = this.endx - this.startx;
        this.draw();
    }
    Total.prototype.draw = function () {
        //clear previous
        this.g.clearRect(this.startx, this.y - this.height / 2, this.width, this.height);
        //================ Draw the rectangle=============
        //x,y,width,height
        var bodyX = this.startx + this.width / 4;
        var bodyY = this.y - this.height / 2;
        var bodyW = this.width / 2;
        var bodyH = this.height;
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();
        var s = this.r + this.r;
        this.g.fillText(s + "Ω", bodyX + 8, this.y + 5);
    };
    //change the resistors resistanve value nr and redraw it
    Total.prototype.setS = function (s) {
        s = s;
        this.draw();
    };
    Total.prototype.getS = function () {
        return this.r + this.r;
    };
    return Total;
}());
