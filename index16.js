function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}



const canEat = {
    eat: function() {
        this.hunget--;
        console.log('eating');
    }
}

const canWalk = {
    walk: function() {
        console.log('walking');
    }
}

const canSwim = {
    walk: function() {
        console.log('walking');
    }
}


function Person() {

}

// const person = Object.assign({}, canEat, canWalk);
// console.log(person);

// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {

}

// Object.assign(Goldfish.prototype, canEat, canSwim);
mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);