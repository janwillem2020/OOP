pokemonName = "Pikachu";
maxHealth = 60;
attacks = [new Attack("Electric Ring", 50), new Attack("Pika Punch", 20)]
energyType = new EnergyType("Lightning", 0);
weakness = new Weakness(new EnergyType("Fire", 0), 1.5);
resistance = new Resistance(new EnergyType("Fighting", 0), 20)

Pokemon.pokemonArray.push(new Pikachu(pokemonName, maxHealth, energyType, attacks, weakness, resistance))

pokemonName = "Charmeleon";
maxHealth = 60;
attacks = [new Attack("Head Butt", 10), new Attack("Flare", 30)]
energyType = new EnergyType("Fire", 0);
weakness = new Weakness(new EnergyType("Water", 0), 2);
resistance = new Resistance(new EnergyType("Lightning", 0), 10)

Pokemon.pokemonArray.push(new Charmander(pokemonName, maxHealth, energyType, attacks, weakness, resistance))

document.write(Pokemon.pokemonArray[0].getName() + " heeft " + Pokemon.pokemonArray[0].getHealth() + " health <br>");
document.write(Pokemon.pokemonArray[1].getName() + " heeft " + Pokemon.pokemonArray[1].getHealth() + " health <br>");
document.write(Pokemon.pokemonArray[0].getName() + " valt " + Pokemon.pokemonArray[1].getName() + " aan met Electric Ring <br>");
Pokemon.pokemonArray[0].attack(Pokemon.pokemonArray[1], 0);
document.write(Pokemon.pokemonArray[1].getName() + " heeft " + Pokemon.pokemonArray[1].getHealth() + " health <br>");
document.write(Pokemon.pokemonArray[0].getName() + " heeft " + Pokemon.pokemonArray[0].getHealth() + " health <br>");
document.write(Pokemon.pokemonArray[1].getName() + " valt " + Pokemon.pokemonArray[0].getName() + " aan met Flare <br>");
Pokemon.pokemonArray[1].attack(Pokemon.pokemonArray[0], 1);
document.write(Pokemon.pokemonArray[1].getName() + " heeft " + Pokemon.pokemonArray[1].getHealth() + " health <br>");
document.write(Pokemon.pokemonArray[0].getName() + " heeft " + Pokemon.pokemonArray[0].getHealth() + " health <br>");
document.write("Gevecht is voorbij")