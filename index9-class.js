const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    push(obj) {
        _items.get(this).push(obj);
    }

    pop() {
        if (_items.get(this).length === 0) {
            throw new Error("stack is empty");
        }
        return _items.get(this).pop();
    }

    peak() {
        const items = _items.get(this);

        if (items.length === 0) {
            throw new Error("Stack is empty.");
        }

        return items[items.length - 1];
    }

    get count() {
        return _items.get(this).length;
    }
}

const c = new Stack();

const tmp = _items.get(c);

console.log(tmp);