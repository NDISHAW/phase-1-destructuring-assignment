// const doggie = {
//   name: 'Buzz',
//   breed: 'Great Pyrenees',
//   furColor: 'black and white',
//   activityLevel: 'sloth-like',
//   favoriteFood: 'hot dogs'
// };
// const name = doggie.name;
// const breed = doggie.breed;
// console.log(name); // => "Buzz"
// console.log(breed); // => "Great Pyrenees"

// const { name, favoriteFood } = doggie;
// console.log(name);
// console.log(favoriteFood);
/*The {} around the variable names tells
 the JavaScript engine that it's going to 
 be pulling values from an Object. The engine 
 looks inside the doggie object for the attributes 
 name and breed and assigns the values associated with 
 those keys to the corresponding variable names. This is
  known as destructuring assignment. */

//   const doggie = {
//   name: 'Buzz',
//   breed: 'Great Pyrenees',
//   furColor: 'black and white',
//   activityLevel: 'sloth-like',
//   favoriteFoods: {
//     meats:{
//       ham: 'smoked',
//       hotDog: 'Oscar Meyer',
//     },
//     cheeses:{
//       american: 'kraft'
//     }
//   }
// };

// const { ham, hotDog } = doggie.favoriteFoods.meats;

// console.log(ham); // => "smoked"
// console.log(hotDog); // => "Oscar Meyer"


/*Using Destructuring Assignment with Arrays */

// const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
// //const [medium, small, giant] = dogs;
// //console.log(medium, small, giant); // LOG: Great Pyrenees Pug Bull Mastiff
// const [, small, giant] = dogs;
// console.log(`tHIS IS A CHIWAWA SMALL!CUTE~> `, small  ,   `THIS IS A GIANT->`,giant);


/*Using Destructuring Assignment with Strings
   We can also destructure with strings by 
   using the String.prototype.split() 
   (Links to an external site.) method to turn
    the string into an array: 
*/
const dogsName = 'Sir Woody BarksALot';
const [title, firstName, lastName] = dogsName.split(' ');
console.log(title, firstName, lastName); // LOG: Sir Woody BarksALot
console.log(title, lastName); // LOG: Sir BarksALot