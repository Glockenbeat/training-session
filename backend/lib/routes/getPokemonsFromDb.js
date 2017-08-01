const database = require('../database');

const handler = (request, reply) => database.getAll(database.POKEMON_COLLECTION_NAME)
  .then(data => reply(data).code(200))
  .catch(error => reply(error.message).code(400));

const route = {
  method: 'GET',
  path: '/pokemonsFromDb',
  handler,
  config: {
    description: 'Used to return a list of from the db',
    tags: ['api'],
  },
};

module.exports = route;
