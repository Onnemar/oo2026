var Polygon = /** @class */ (function () {
    function Polygon(x, y) {
        this.x = x;
        this.y = y;
    }
    //create method that adds new points to polygon
    Polygon.prototype.add = function (x, y) {
        this.x.push(x); //add the x value to the x array
        this.y.push(y);
    };
    //this method is going to calculate the distance between two points 
    Polygon.prototype.distance = function (x1, y1, x2, y2) {
        var a = x2 - x1;
        var b = y2 - y1;
        return Math.sqrt(a * a + b * b);
    };
    //perimeter- all sides added together
    //this method calculates the total lenght of polyfon (ümbermõõt)
    Polygon.prototype.perimeter = function () {
        var total = 0;
        //start counting at onw(1234) because we need the previous point(always need two points to measure one side)
        // this.x.lenght: keep looping while i is smaller than number of points
        for (var i = 1; i < this.x.length; i++) {
            total += this.distance(this.x[i - 1], //the previous x
            this.y[i - 1], //previous y
            this.x[i], //currentx
            this.y[i] //currenty
            );
        }
        //add the distance from last point to first point
        total += this.distance(this.x[this.x.length - 1], //last x
        this.y[this.y.length - 1], //last y            
        this.x[0], //firstx
        this.y[0] //firsty
        //this.x.lenght=3 for a triangle
        //3-1=2
        );
        return total;
    };
    Polygon.prototype.draw = function (g) {
        //if there is no points, stop the function
        if (this.x.length === 0)
            return;
        g.beginPath();
        g.moveTo(this.x[0], this.y[0]); //moveto already draws the first point
        //point0 to point1
        for (var i = 1; i < this.x.length; i++) {
            g.lineTo(this.x[i], this.y[i]);
        }
        g.lineTo(this.x[0], this.y[0]);
        g.stroke();
    };
    return Polygon;
}());
//let p1= new Polygon ( [50,30,40], [40,30,50]);
//console.log(p1);
