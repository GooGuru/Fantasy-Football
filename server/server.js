const express = require("express");
const path = require('path')
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const { typeDefs, resolvers } = require("./schemas");

const db = require("./config/connection");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});



const { League } = require("./models/League");
const { Player } = require("./models/Player");
const { Team } = require("./models/Team");
const { User } = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3001;

const startApolloServer = async () => {
  await server.start();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server));

  if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    })
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Connected to http://localhost:${PORT}`);
    });
  });
};

startApolloServer();
