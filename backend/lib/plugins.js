const inert = require('inert');
const vision = require('vision');
const hapiSwagger = require('hapi-swagger');

const plugins = [
  inert,
  vision,
  hapiSwagger,
];

module.exports = plugins;
