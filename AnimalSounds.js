const animalSounds = {
    domesticated:{
        dog: require('./dog'),
        bird: require('./bird'), 
        cat: function meow(){
        return 'meow!'
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