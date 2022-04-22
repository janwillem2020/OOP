pokemonName = "Pikachu";
health = 70;
attacks = [new Attack("Tackle", 15), new Attack("Lightning Rod", 30)]
energyType = new EnergyType("Electric", 0);
weakness = new Weakness(new EnergyType("Ground", 0), 2);
resistance = new Resistance(new EnergyType("Flying", 25))

Pokemon.pokemonArray.push(new Pikachu(pokemonName, health, attacks, energyType, weakness, resistance))

pokemonName = "Groudon";
health = 100;
attacks = [new Attack("Mud Shot", 30), new Attack("Earthquake", 60)]
energyType = new EnergyType("Ground", 0);
weakness = new Weakness(new EnergyType("Ice", 0), 2);
resistance = new Resistance(new EnergyType("Electric", 25))

Pokemon.pokemonArray.push(new Groudon(pokemonName, health, attacks, energyType, weakness, resistance))

