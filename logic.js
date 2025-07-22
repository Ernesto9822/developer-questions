//Answer 1: Find all Pokémon that are of type "grass".

const type = "grass";
const answer1 = pokes
  .filter(poke => poke.types.includes(type))
  .map(poke => poke.name);

console.log("Answer 1:", answer1);


// Answer 2: Find all Pokémon that are either of type "bug" or "poison", and those that are both.

const types = ["bug", "poison"];
const answer2Or = [];
const answer2And = [];

for (const poke of pokes) {
  // OR: al menos uno de los tipos coincide
  if (poke.types.some(t => types.includes(t))) {
    answer2Or.push(poke.name);
  }

  // AND: todos los tipos buscados están dentro del poke.types
  if (types.every(t => poke.types.includes(t))) {
    answer2And.push(poke.name);
  }
}

console.log("Answer 1", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);
