let fullClassList = [
    {
        firstName: 'John',
        middleName: '',
        lastName: 'Smith',
        preferredName: 'JJ', 
        gender: 'male',
        birthDate: '10242012',
        // age: function {calculate from birthDate}
        track: 1,

        houseNumber: 14,
        roadName: 'Cool Road Name Dr.',
        aptNumber: 'C3',
        town: 'Jacksonville',
        state: 'PA', 
        zipCode: 12345,

        PrimaryContact1Name: 'Jane Doe',
        PrimaryContact1CellPhone: '5559995555',
        PrimaryContact1WorkPhone: '',
        PrimaryContact1Email: '',
        PC1RelationToChild: 'Mother',

        PrimaryContact2Name: '',
        PrimaryContact2CellPhone: '',
        PrimaryContact2WorkPhone: '',
        PrimaryContact2Email: '',
        PC2RelationToChild: 'Father',  

        emergencyContact1Name: 'Jane Smith',
        emergencyContact1CellPhone: '5559995235',
        emergencyContact1WorkPhone: '',
        emergencyContact1Email: '',
        EC1RelationToChild: 'Aunt', 

        emergencyContact2Name: '',
        emergencyContact2CellPhone: '',
        emergencyContact2WorkPhone: '',
        emergencyContact2Email: '',
        EC2RelationToChild: 'Uncle',

        allergies: ['peanuts', 'eggs'],
        potentiallyLifeThreatening: true,
        medicine: ['Epi pen', 'inhaler'],
        epiPenOnSite: true,
        otherMedicineOnSite: false,
        additionalHealthInfo: '',

        // Doctor info goes here


    },
    {},
    {},
    {},
]
// console.log(Object.keys(fullClassList[0]));



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
//     sizeFunc: function() {
//         console.log(this.size);
//     },
//     brother: {
//         name: 'kyle',
//         age: 34,
//     }
// };

// car.sizeFunc();

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

// let friendAge = [
//     {name: 'Chris', age: 14},
//     {name: 'David', age: 24},
//     {name: 'Megan', age: 18},
// ]

// for (let i = 0; i < friendAge.length; i++) {
//     if ((friendAge[i].age < 20) && (friendAge[i].age > 12)) {
//         console.log(`${friendAge[i].name} is a teenager!`);
//     } else {
//         console.log(`${friendAge[i].name} is NOT a teenager!`);
//     }
// }


// let numberList = [1, 200, 37, 457, 56, 61, 71, 807, 9093, 100];
// while (true) {
//     for (let i = 0; i < numberList.length; i++) {
//         if (numberList[i] < 100) {
//             console.log(`${numberList[i]} is less than 100`);
//         } else {
//             console.log(`${numberList[i]} is greater than or equal to 100`);
//         }
//     } break;
// }

// function printArrayDetails(list) {
//     for (let i = 0; i < list.length; i++) {

//         // Writes a special message if the pokemon's height is greater than 2m
//         if (list[i].height > 2) {
//             document.write(
//                 `The height of ${list[i].name} is ${list[i].height}m. WOW, that's big!`
//                 );
//             document.write("<br>");
//             document.write("<br>")
    
//         // Writes the height of the pokemon and their name
//         } else {
//             document.write(
//                 `The height of ${list[i].name} is ${list[i].height}m.`
//                 );
//             document.write("<br>");
//             document.write("<br>")
//         } 
    
//     }
// }


// function Sum(val1, val2) {
//     return val1 + val2;
// }

// let result = Sum(5, 7);
// console.log(result);


// let nameList = ['John', 'David', 'Amy', 'Chris', 'Shawn'];
// let blankList = [1, 2, 3, 4];

// nameList.push('Nikki');

// console.log(nameList);
// console.log(nameList.at(0))
// blankList.fill(0, 0, 4);
// console.log(blankList);

// nameList.forEach(function(name) {
//     console.log(name);
// });


pokemonList = [
    {
        name: 'Bulbasaur', 
        height: 0.7, 
        types: ['Grass', 'Poison']
    },
    {
        name: 'Charmander', 
        height: 0.6, 
        types: ['Fire']
    },
    {
        name: 'Squirtle', 
        height: 0.5, 
        types: ['Water']
    },
    {
        name: 'Arcanine', 
        height: 1.9, 
        types: ['Fire']
    },
    {
        name: 'Gengar', 
        height: 1.5, 
        types: ['Ghost', 'Poison']
    },
    {
        name: 'Gyarados', 
        height: 6.5, 
        types: ['Water', 'Flying']
    },
    {
        name: 'Zapdos', 
        height: 1.6, 
        types: ['Electric', 'Flying']
    },
];


// pokemonList.forEach( item => {
//     console.log(item.name, item.height, item.types);
// });

let blankList1 = [];
let blankList2 = [];
let blankList3 = [];

pokemonList.forEach(element => {
    blankList1.push(element.name);
    blankList2.push(element.height);
    blankList3.push(element.types);
});

console.log("1. " + blankList1);
console.log("2. " + blankList2);
console.log("3. " + blankList3);
console.log('');

Object.keys(pokemonList).forEach( function(item) {
    console.log(pokemonList[item]);
});


// pokemonList.forEach(function(key) {
//     console.log(key.name);
// });

// let randomArray = ["Pikachu"];

// pokemonList.forEach(function(key){
//     randomArray.push(key.name);
// });
// console.log('');
// console.log(randomArray);


let add = (a,b) => a + b;
let mult = (a,b) => a * b;


console.log(add(mult(4,3), mult(3, 4)));







































































