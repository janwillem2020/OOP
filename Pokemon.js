class Pokemon {
    static pokemonArray = []; //Create array for pokemon to be put in
    static amountOfPokemon = 0; //Set amount of pokemon

    constructor(name, hitpoints, energyType, attacks, weakness, resistance) {
        this.name = name;
        this.hitpoints = hitpoints;
        this.health = hitpoints;
        this.energyType = energyType;
        this.attacks = attacks;
        this.weakness = weakness;
        this.resistance = resistance;
        Pokemon.amountOfPokemon++;
    }

    attack(target, attack){ //Function to attack target(pokemon) using the takeDamage function
        target.takeDamage(this.energyType, this.attacks[attack]);
    }

    takeDamage(energyType, attack) { //Function to calculate damage using multipliers and weaknesses
        if (energyType.name == this.resistance.energyType.name){
            attack.value = attack.value - this.resistance.value;
        }

        if (energyType.name == this.weakness.energyType.name){
            this.health = this.health - attack.value * this.weakness.value;
        } else {
            this.health = this.health - attack.value
        }
    }

    static getPopulation() { //Get Amount of pokemon
        return Pokemon.amountOfPokemon;
    }

    static removeDead() { //Delete pokemon from array if health <= 0
        for (var i = 0; i < Pokemon.pokemonArray.length; i++) {
            if (Pokemon.pokemonArray[i].hitpoints <= 0) {
                Pokemon.pokemonArray.splice(Pokemon.pokemonArray[i], 1);
                amountOfPokemon--;
            }
        }
    }
}