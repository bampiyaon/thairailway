
// let js = 'amazing';
// console.log(20+5+3+4);

let country = 'Thailand';
let continent = 'Asia';

let isIsland = false;
let language = 'Thai';

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);


//Basic Operators
const population = '70000000';
halfPop = population/2;
halfPop++;
// console.log(halfPop);

const finland = '6000000';
// console.log(population > finland);

const avgContry = '33000000';
// console.log(population < avgContry);

// const description =  (country + ' is in ' + continent + ', '+' and it"s ' + population + ' people ' + 'speak ' + language);
// const description = (`${country} is in ${continent} and it's ${population} people speak ${language}`)
// console.log(description);

// if (population > 33000000) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is 22 million below average`);
// }

//Type Conversion and Coercion


// Equality Operators: == vs. ===
/* const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?'); */

const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else console.log('No borders');