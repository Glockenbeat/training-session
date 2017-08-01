const pluginFakes = require('../../test/test-plugins');
const initializeServer = require('../server').initialize;
const server = require('../server').server;
const route = require('./getPokemons');

beforeAll(() => initializeServer({ plugins: pluginFakes }));
const request = {
  method: route.method,
  url: route.path,
};

describe(`${route.method} ${route.path}`, () => {
  describe('When the user tries to get a list of pokemons', () => {
    it('should return the pokemons', () => server.inject(request)
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        const pokemons = JSON.parse(response.payload);
        expect(pokemons.length).toEqual(5);
      }));
  });
});
