
// const POKEMON_API = "https://pokeapi.co/api/v2/";

// getPokemonList -> Get the first 151 pokemon 
// export async function getPokemonList() {
//     const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
//     let data;
//     try {
//         data = await response.json();
//     } catch (error) {
//         console.error("Error parsing JSON:", error);
//     }
//     return data.results;
// }

// // getPokemon -> given a string "pikachu", get the information of pikachu
// export async function getPokemon(name: string) {
//     // pokemon/ditto
//     const response = await fetch(POKEMON_API + "/" + name);
//     const data = await response.json();
//     return data;
// }

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonList() {
  const response = await fetch(`${POKEMON_API}?limit=151&offset=0`);
  const data = await response.json();
  return data.results;
}

export async function getPokemon(name: string) {
  const response = await fetch(`${POKEMON_API}/${name}`);
  const data = await response.json();
  return data;
}
