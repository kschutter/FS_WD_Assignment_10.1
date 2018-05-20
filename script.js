class Rectangle {
    // Default constructor
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    // Calculates area by multiplying the rectangle's dimensions
    calculateArea() {
        return this.breadth * this.length;
    }
}