const joi = require('joi');
const database = require('../database');

const handler = (request, reply) => database.insertData(
  database.POKEMON_COLLECTION_NAME,
  request.payload)
  .then(data => reply(data).code(200))
  .catch(error => reply(error.message).code(400));

const route = {
  method: 'POST',
  path: '/pokemon',
  handler,
  config: {
    description: 'Used to return a list of from the db',
    tags: ['api'],
    validate: {
      payload: {
        url: joi.string().uri().required(),
        name: joi.string().required(),
      },
    },
  },
};

module.exports = route;
