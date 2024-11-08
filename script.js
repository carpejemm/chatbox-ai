let userName = "Bob"; // string
const isMale = true; // boolean ==> true or false
let age = 35; // number

// Object
let person = {
    firstName: "Juan",
    lastName: "Dela Cruz",
    age: 20
}

console.log(person.firstName);
console.log(person['lastName']);

let userDetails = {
    province: "Metro Manila",
    city: "Makati",
    barangay: 143
}
// function declaration
function welcome(country) { // params / parameters
    // code block

    // console.log(`Welcome to the ${country}`);

    if (country == 'Hongkong') { // TRUTHY
        console.log(`Welcome to the Hongkong`);
    } else if(country == 'Philippines'){
        console.log(`Welcome to the Philippines`);
    } else {
        console.log(`Welcome!`);
    }
}

welcome('Hongkong') // arguments
welcome('Philippines') // arguments
welcome('Japan') // arguments

// arrow function
const welcomeAgain = () => {
    // code block
}

// const arrayOfElements = [1, 2, 3, 4, 5]

// for (let index = 0; index < arrayOfElements.length; index++) {
//     const element = array[index];
// }
