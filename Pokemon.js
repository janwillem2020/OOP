class Pokemon {
    static amountOfPokemon = 0;

    constructor(name, hitpoints, energyType, attacks, resistance, weakness) {
        this.name = name;
        this.hitpoints = hitpoints;
        this.energyType = energyType;
        this.attacks = attacks;
        this.resistance = resistance;
        this.weakness = weakness;
        Pokemon.amountOfPokemon++;
    }
}