function makeCounter() {
    let count = 0; // private variable
    return () => {
        return count++;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter2()); // 0
console.log(counter2()); // 1

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
