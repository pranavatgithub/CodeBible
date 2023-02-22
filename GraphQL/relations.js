//data

/* {
    "users": [
        {
            "id": "1",
            "firstName": "Pranav",
            "age": 28,
            "companyId": 1
        },
        {
            "id": "2",
            "firstName": "Rajitha",
            "age": 27,
            "companyId": "2"
        },
        {
            "id": "3",
            "firstName": "Aswin",
            "age": 24,
            "companyId": "1"
        }
    ],
    "companies": [
        {
            "id": "1",
            "name": "SCG",
            "country": "Thailand"
        },
        {
            "id": "2",
            "name": "Deloitte",
            "country": "US"
        }
    ]
}
*/


const graphql = require('graphql');
const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt
} = graphql;

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        country: { type: GraphQLString }
    }
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        companyId: { type: GraphQLString },
        company: {
            type: CompanyType,
            args: {

            },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`).then(resp => resp.data);
            }
        }
    }
});



const RootQuery = new GraphQLObjectType({ // consider it as an entry point query
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/users/${args.id}`).then(resp => resp.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});