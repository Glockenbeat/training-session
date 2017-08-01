const pokemons = [
  {
    url: 'http://pokeapi.co/api/v2/pokemon/1/',
    name: 'bulbasaur',
  },
  {
    url: 'http://pokeapi.co/api/v2/pokemon/2/',
    name: 'ivysaur',
  },
  {
    url: 'http://pokeapi.co/api/v2/pokemon/3/',
    name: 'venusaur',
  },
  {
    url: 'http://pokeapi.co/api/v2/pokemon/4/',
    name: 'charmander',
  },
  {
    url: 'http://pokeapi.co/api/v2/pokemon/5/',
    name: 'charmeleon',
  },
];

const handler = (request, reply) => {
  try {
    return reply(pokemons).code(200);
  } catch (error) {
    return reply(error.message).code(400);
  }
};

const route = {
  method: 'GET',
  path: '/pokemons',
  handler,
  config: {
    description: 'Used to return a list of pokemons',
    tags: ['api'],
  },
};

module.exports = route;
