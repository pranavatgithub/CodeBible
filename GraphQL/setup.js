const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const app = express();
const schema = require('./schema/schema');

app.use('/graphql', expressGraphQL({
    graphiql: true // its a developer tool to query
}));

app.listen(4000, () => {
    console.log('started');
});