import { createServer } from '@graphql-yoga/node';

const server = createServer({
    schema: {
        typeDefs: /* GraphQL */ `
            type Query {
                hello: String
            }
        `,
        resolvers: {
            Query: {
                hello: () => 'Hello Hello Hello',
            },
        },
    },
});
server.start();
