let myName = 'Shawn';
let greeting = 'Hello';

console.log(`${greeting} ${myName}!`);

/////////////////////////////////////////////// Break

let currentModel = 'Chevy';

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

car[currentModel] = 13;
console.log(car[currentModel]);

let friendList = [
    {friendName: 'Aaron', friendAge: 31, job: 'Teacher'},
    {friendName: 'Donnie', friendAge: 31, job: 'IT'},
    {},
    {},
    {},
]
