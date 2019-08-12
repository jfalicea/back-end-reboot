//=====================================
    //callback examples: 
//=====================================
// const bark = require('./dog');
// const greet = require('./greet');
// // const woof = bark();   
// greet(bark);                    //Use '()' because we want to run the function. 


//bird call
// const tweet = require('./bird');
// const greet = require('./greet');
// greet(tweet);

//library of sounds 
const {domesticated,farm} = require('./AnimalSounds');
const greet = require('./greet')
greet(domesticated.dog);
greet(domesticated.cat);
greet(farm.cow);
// greet(farm.cow);
// greet(bird);
// greet(cat);




//=====================================
    //module examples: 
//=====================================
// const catSounds = require('./cat')
// console.error(catSounds.cat);

// const catSounds2 = require('./cat')
// console.log(`cat: ${catSounds2.cat}`)
// console.log(`Kitten: ${catSounds2.kitten}`)

// // const catSounds3 = require('./cat')
// console.log(require('./cat').cat)

//" destructuring"  == pluck a specific value out of an object ***YOU CAN GRAB MULTIPLES OUT OF THE OBJECT!!! 
// const {cat,kitten} = require('./cat') //variable must be the same  the same value as the key!!! 
// console.error("cat: ",cat);
// console.log('kitten: ', kitten)

//when would I destructure? 
    //when you want one to three individual values. 
    //if you want a lot more, bring in the whole object. 
