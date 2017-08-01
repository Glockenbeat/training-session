const config = require('config');
const Hapi = require('hapi');

const routes = require('./routes');
const plugins = require('./plugins');

const server = new Hapi.Server();
server.connection({
  host: config.server.host,
  port: config.server.port,
  routes: { cors: true },
});

const initialize = (options = {}) => new Promise((resolve, reject) => {
  const serverPlugins = options.plugins || plugins;
  const serverRoutes = options.routes || routes;

  server.route(serverRoutes);

  server.register(serverPlugins)
    .then(resolve, reject);
});

if (!module.parent) {
  initialize()
    .then(() => server.start())
    .then(() => { console.info({ serverInfo: server.info.uri }, 'Server running at:'); })
    .catch(error => console.error(error));
}

exports.server = server;
exports.initialize = initialize;
