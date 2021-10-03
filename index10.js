function Circle(radius) {
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

const c1 = new Circle(1);

Circle.prototype.draw = function() {
    console.log('draw');
}

// Return instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) {
    console.log(key);
}

// c1.hasOwnProperty('radius')
// true
// c1.hasOwnProperty('draw')
// false