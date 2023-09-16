// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Oi');

//     return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js'

const server = fastify();

server.post('/videos', () => {
    return "Hello, post";
})

server.get('/videos', () => {
    return "Hello, get!";
})

server.put('/videos/:id', () => {
    return "Hello, put!";
})

server.delete('/videos/:id', () => {
    return "Hello, delete!";
})

server.listen({
    port: 3333,
});

