function Circle(radius) {

    // Instance members
    this.radius = radius;

    // this.draw = function() {
    //     console.log('draw');
    // }
}


// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}


const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.toString = function() {
    return 'Circle with radius' + this.radius;
}