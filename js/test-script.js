// let myName = 'Shawn';
// let greeting = 'Hello';

// console.log(`${greeting} ${myName}!`);

////////////////////////////////////////////////////////////////////////// Break

// let currentModel = 'Chevy';

// let car = {
//     color: 'red',
//     mileage: 10,
//     make: 'BMW',
//     size: 'small',
//     brother: {
//         name: 'kyle',
//         age: 34,
//     }
// };

// car[currentModel] = 13;
// console.log(car[currentModel]);

// let friendList = [
//     {friendName: 'Aaron', friendAge: 31, job: 'Teacher'},
//     {friendName: 'Donnie', friendAge: 31, job: 'IT'},
//     {},
//     {},
//     {},
// ]



//////////////////////////////////////////////////////////// Conditional Testing

// let age = 45;

// if (age < 45) {
//     console.log("You are young!");
// } else {
//     console.log("You're getting old!...");
// }

// if (age === 45 || age == 23) {
//     console.log('45 or 23');
// } else {
//     console.log('not 45 or 23');
// }

// value = 'James';
// userName = value || 'friend';

// console.log(`Hi there ${userName}!`)

// let age = 12;
// let result = age < 20 && age > 12 ? "Teenager" : "Not a teen";
// console.log(result);

// let day = "tuesday";

// switch (day.toUpperCase()) {
//     case day = "MONDAY":
//         console.log("Happy Monday!");
//         break;
//     case day = 'TUESDAY':
//         console.log("Happy Tuesday!");
//         break;

//     default:
//         console.log("Something went wrong!")
//         break;
// }

// for (let i = 0; i <= 25; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }

// let friendsList = ['Aaron', 'John', 'Chris', 'James', 'Megan'];
// for (let i = 0; i < friendsList.length; i++) {
//     console.log(friendsList[i]);
    
// }

let friendAge = [
    {name: 'Chris', age: 14},
    {name: 'David', age: 24},
    {name: 'Megan', age: 18},
]

for (let i = 0; i < friendAge.length; i++) {
    if ((friendAge[i].age < 20) && (friendAge[i].age > 12)) {
        console.log(`${friendAge[i].name} is a teenager!`);
    } else {
        console.log(`${friendAge[i].name} is NOT a teenager!`);
    }
}


let numberList = [1, 200, 37, 457, 56, 61, 71, 807, 9093, 100];
while (true) {
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] < 100) {
            console.log(`${numberList[i]} is less than 100`);
        } else {
            console.log(`${numberList[i]} is greater than or equal to 100`);
        }
    } break;
}