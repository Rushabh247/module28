// Base class Shape
class Shape {
    constructor() {}

   
    area() {
        throw new Error('This method must be overridden in subclass');
    }

    perimeter() {
        throw new Error('This method must be overridden in subclass');
    }
}


class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

  
    area() {
        return Math.PI * this.radius * this.radius;
    }


    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}


class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }

   
    perimeter() {
        return 2 * (this.length + this.width);
    }
}


class Triangle extends Shape {
    constructor(side1, side2, side3) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

 
    area() {
        const s = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }

    perimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}


const circle = new Circle(5);
console.log('Circle Area:', circle.area()); // Output: Circle Area: 78.53981633974483
console.log('Circle Perimeter:', circle.perimeter()); // Output: Circle Perimeter: 31.41592653589793

const rectangle = new Rectangle(4, 6);
console.log('Rectangle Area:', rectangle.area()); // Output: Rectangle Area: 24
console.log('Rectangle Perimeter:', rectangle.perimeter()); // Output: Rectangle Perimeter: 20

const triangle = new Triangle(3, 4, 5);
console.log('Triangle Area:', triangle.area()); // Output: Triangle Area: 6
console.log('Triangle Perimeter:', triangle.perimeter()); // Output: Triangle Perimeter: 12
