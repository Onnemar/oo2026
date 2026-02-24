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
        this.g.clearRect(this.startx + this.width, this.y - this.height / 2, this.width, this.height);
        //================ Draw the rectangle=============
        //x,y,width,height
        var bodyX = this.startx + this.width;
        var bodyY = this.y - this.height / 2;
        var bodyW = this.width;
        var bodyH = this.height;
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();
        this.g.fillText(this.l1 + "Ω", bodyX + 8, this.y + 8);
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
var Plus = /** @class */ (function () {
    function Plus(g, startx, 
    //x position where the resistor is going to end
    endx, 
    //how far down the screenwe going to draw the resistor. Y increases diagram go
    y) {
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        this.xlenght = this.endx - this.startx;
        this.draw();
    }
    ;
    Plus.prototype.draw = function () {
        this.g.beginPath();
        //-line
        this.g.moveTo(this.startx, this.y);
        this.g.lineTo(this.endx, this.y);
        //|line
        this.g.moveTo(this.startx + 10, this.y - 10);
        this.g.lineTo(this.startx + 10, this.y + 10);
        this.g.stroke();
    };
    return Plus;
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
        this.g.clearRect(this.startx + this.width, this.y - this.height / 2, this.width, this.height);
        //================ Draw the rectangle=============
        //x,y,width,height
        var bodyX = this.startx + this.width;
        var bodyY = this.y - this.height / 2;
        var bodyW = this.width;
        var bodyH = this.height;
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();
        this.g.fillText(this.l2 + "Ω", bodyX + 8, this.y + 8);
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
var Equals = /** @class */ (function () {
    function Equals(g, startx, 
    //x position where the resistor is going to end
    endx, 
    //how far down the screenwe going to draw the resistor. Y increases diagram go
    y) {
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        this.xlen = this.endx - this.startx;
        this.draw();
    }
    Equals.prototype.draw = function () {
        this.g.beginPath();
        //-line
        this.g.moveTo(this.startx, this.y + 3);
        this.g.lineTo(this.endx, this.y + 3);
        //2nd -line
        this.g.moveTo(this.startx, this.y - 3);
        this.g.lineTo(this.endx, this.y - 3);
        this.g.stroke();
    };
    return Equals;
}());
var Total = /** @class */ (function () {
    function Total(s, g, 
    //x position where the resistor is going to begin
    startx, 
    //x position where the resistor is going to end
    endx, 
    //how far down the screenwe going to draw the resistor. Y increases diagram go
    y) {
        this.s = s;
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
        this.g.clearRect(this.startx + this.width, this.y - this.height / 2, this.width, this.height);
        //================ Draw the rectangle=============
        //x,y,width,height
        var bodyX = this.startx + this.width;
        var bodyY = this.y - this.height / 2;
        var bodyW = this.width;
        var bodyH = this.height;
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();
        this.g.fillText(this.s + "Ω", bodyX + 8, this.y + 8);
    };
    //change the resistors resistanve value nr and redraw it
    Total.prototype.setS = function (s) {
        this.s = s;
        this.draw();
    };
    Total.prototype.getS = function () {
        return this.s;
    };
    return Total;
}());
