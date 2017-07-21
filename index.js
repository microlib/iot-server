'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route({
  method: 'GET',
  path: '/resource/{id}',
  handler: function (request, reply) {
    reply('This is the content for object #' + request.params.id);
  }
});

server.route({
  method: 'GET',
  path: '/resource/',
  handler: function (request, reply) {
    reply('This is the content');
  }
});

server.route({
  method: 'PUT',
  path: '/resource/{type}',
  handler: function (request, reply) {
    reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
  }
});

server.route({
  method: 'GET',
  path: '/type',
  handler: function (request, reply) {
    reply('This is the list of supported types');
  }
});

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
