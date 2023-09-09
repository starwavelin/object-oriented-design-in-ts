/**
 * Note: the methods like area(), perimeter() below are are
 *  considered examples of abstraction, because the invoker of these methods
 *  do Not need to know how they're implemented.
 */

class Circle {
    //define data attributes
    private radius: number;
    private pi: number;

    //define constructors
    constructor(r: number = 0) {
        this.radius = r;
        this.pi = 3.142;
    }

    //define methods
    public area(): number {
        return this.pi * Math.pow(this.radius, 2);
    }

    public perimeter(): number {
        return 2 * this.pi * this.radius;
    }
}

const circle = new Circle(5);
console.log(`Area: ${circle.area()}`);
console.log(`Perimeter: ${circle.perimeter()}`);
