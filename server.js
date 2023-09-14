// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Oi');

//     return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify';

const server = fastify();

server.get('/', () => {
    return "Hello, world!";
})

server.get('/mateus', () => {
    return "Hello, Nateus!";
})

server.get('/sofia', () => {
    return "Hello, Sofia!";
})

server.listen({
    port: 3333,
});

