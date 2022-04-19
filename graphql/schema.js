const typeDefs = /* GraphQL */ `
    type BoardGame {
        id: Int!
        name: String!
        originalName: String!
        genres: [String]
        description: String
        maxPlayers: Int!
        minPlayers: Int!
        # images: String
    }

    type Query {
        games: [BoardGame]!
        game(id: Int!): BoardGame
    }
`;

export default typeDefs;
