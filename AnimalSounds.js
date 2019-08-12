const animalSounds = {
    domesticated:{
        dog: require('./dog'),
        bird: require('./bird'), 
        cat: function meow(atWhom){
        return `meow, ${atWhom}`
        },
    },    
    farm:{
        cow: function moo(){
            return 'moo'
        },
        pig: function oink(){
            return 'oink'
        },
    }
};
module.exports = animalSounds;