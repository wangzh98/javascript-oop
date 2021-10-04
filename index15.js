function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Circle, Shape);

function Circle(radius, color) {
    Shape.call(this, color);
    
    this.radius =radius;
}

Circle.prototype.draw = function() {
    console.log('draw');
}



function Square(size) {
    this.size = size;
}

extend(Square, Shape);
