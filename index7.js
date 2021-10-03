let person = {name: 'Wzh'};

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});

person.name = 'John';

console.log(person);
// console.log(Object.keys(person));