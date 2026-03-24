const hero = {
    name: "Luna the Brave",
    class: "Mage",
    level: 12,
    health: 85,
    mana: 120,
    isAlive: true,
};

const key = "name";

// Access
console.log(hero.name);
console.log(hero["name"]);
console.log(hero[key]);

// add key 
hero.weapon = "sword"
console.log(hero);
delete hero.weapon;
console.log(hero);


// to check if key is there or not 
// returns true or false
console.log(hero.hasOwnProperty("name"));
console.log(hero.hasOwnProperty("toString"));
