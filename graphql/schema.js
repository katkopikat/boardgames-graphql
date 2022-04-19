const typeDefs = /* GraphQL */ `
    type BoardGame {
        id: Int!
        name: String!
        originalName: String!
        genres: [String]
        description: String
        maxPlayers: Int!
        minPlayers: Int!
        score: Float
        # images: String
    }

    # type UserBoardGame {
    #     name: String!
    #     score: Int
    # }

    type Query {
        gamesLib: [BoardGame]!
        game(id: Int!): BoardGame
        # userGames: [BoardGame]!
    }

    type Mutation {
        deleteGameFromLib(id: Int): Boolean
        addGameToLib(
            name: String!
            originalName: String
            genres: [String]
            description: String
            maxPlayers: Int!
            minPlayers: Int!
            score: Int
        ): BoardGame
        # addUserGame(name: String, score: Int): name
    }
`;

export default typeDefs;
