// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Oi');

//     return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js'

const server = fastify();
const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body;

    database.create({
        title,
        description,
        duration,
    });

    return reply.status(201).send();
})

server.get('/videos', () => {
    const videos = database.list();

    console.log(videos);

    return videos
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

