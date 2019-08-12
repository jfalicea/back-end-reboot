    //howFN should be a function that returns a string, 
function sayHello(howFn){               //within the (), declare the parameters. 
    console.log(`${howFn()}! I am sooooo happy to meet you!`);
};
//this is SPECIFIC to NODE: 
module.exports = sayHello; // assing the sayHello function as the export....
//here we dont use '()' because we dont run the program. we just want to assign the function as a value. 


