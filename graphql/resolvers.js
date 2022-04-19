import { games, getGameById } from './db';

const resolvers = {
    Query: {
        games: () => games,
        game: (_, { id }) => getGameById(id),
    },
};

export default resolvers;
