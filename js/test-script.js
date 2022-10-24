let fullClassList = [
    {
        firstName: 'John',
        middleName: '',
        lastName: 'Smith',
        preferredName: 'JJ', 
        gender: 'male',
        birthDate: '10242012',
        // age: calculated from birthDate,
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

function printArrayDetails() {
    for (let i = 0; i < pokemonList.length; i++) {

        // Writes a special message if the pokemon's height is greater than 2m
        if (pokemonList[i].height > 2) {
            document.write(
                `The height of ${pokemonList[i].name} is ${pokemonList[i].height}m. WOW, that's big!`
                );
            document.write("<br>");
            document.write("<br>")
    
        // Writes the height of the pokemon and their name
        } else {
            document.write(
                `The height of ${pokemonList[i].name} is ${pokemonList[i].height}m.`
                );
            document.write("<br>");
            document.write("<br>")
        } 
    
    }
}
























