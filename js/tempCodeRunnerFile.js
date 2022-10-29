let testObject = {
    name: 'Ninetales',
    height: 1.1,
    types: ['Fire']
};

let compareList = JSON.stringify(["height","name","types"]);
let stringifyList = JSON.stringify(Object.keys(testObject).sort());

console.log(compareList);
console.log(stringifyList);
console.log(compareList === stringifyList);