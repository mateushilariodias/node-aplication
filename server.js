import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.write('Listening');

    return response.end()
})

server.listen(3333)