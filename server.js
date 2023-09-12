import { createServer } from 'node:http'

const server = createServer((request, response) => {
    console.log('Listening');
})

server.listen(3333)