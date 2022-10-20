let myName = 'Shawn';
let greeting = 'Hello';

console.log(`${greeting} ${myName}!`);

/////////////////////////////////////////////// Break

let owner = 'Greg'

let car = {
    color: 'red',
    mileage: 10,
    make: 'BMW',
    size: 'small',
    brother: {
        name: 'kyle',
        age: 34,
    }
};

car[owner] = 113;
console.log(car[owner]);