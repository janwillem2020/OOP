// Create new pokemon and attach attacks
class Pokemon {
    static pokemonArray = []; //Create array for pokemon to be put in
    static amountOfPokemon = 0; //Set amount of pokemon

    constructor(name, hitpoints, energyType, attacks, weakness, resistance) {
        this._name = name;
        this.hitpoints = hitpoints;
        this._health = hitpoints;
        this._energyType = energyType;
        this._attacks = attacks;
        this._weakness = weakness;
        this._resistance = resistance;
        Pokemon.amountOfPokemon++;
    }

    attack(target, attack){ //Function to attack target(pokemon) using the takeDamage function
        target.#takeDamage(this._energyType, this._attacks[attack]);
    }

    #takeDamage(energyType, attack) { //Function to calculate damage using multipliers and weaknesses
        if (energyType.name == this._resistance.energyType.name){
            attack.value = attack.value - this._resistance.value;
        }
        if (energyType.name == this._weakness.energyType.name){
            this._health = this._health - attack.value * this._weakness.value;
        } else {
            this._health = this._health - attack.value
        }
    }

    getName() {
        return this._name;
    }

    getHealth() {
        return this._health;
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