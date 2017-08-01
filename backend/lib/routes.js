const getPokemonsRoute = require('./routes/getPokemons');
const getPokemonsFromDbRoute = require('./routes/getPokemonsFromDb');
const postPokemonRoute = require('./routes/postPokemon');

const routes = [
  getPokemonsRoute,
  getPokemonsFromDbRoute,
  postPokemonRoute,
];

module.exports = routes;
