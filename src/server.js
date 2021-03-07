const { ApolloServer, gql } = require('apollo-server');
const fetch = require("node-fetch");
const express =require("express");
const graphql = require("graphql");
const {GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLEnumType} =graphql 
const app =express();
const {graphqlHTTP} = require ("express-graphql");
const baseURL= 'https://api.chucknorris.io/jokes/random/?category=';
const randURL= 'https://api.chucknorris.io/jokes/random';
const catURL= 'https://api.chucknorris.io/jokes/categories';
const cat = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];
const car='career';

const typeDefs = gql `



type Query{   

joke:String!
animals:String!
careers:String!
celebs:String!
devs:String!
explicit:String!
fashion:String!
food:String!
history:String!
money:String!
movie:String!
music:String!
politics:String!
religion:String!
science:String!
sport:String!
travel:String!
}


`; //Query Type that collects different joke values depending on the field chosen.

jk=fetch(`${baseURL}`).then(res=> res.json());

console.log(jk);

const resolvers = {
    Query: {
    joke:() => {
        return fetch(`${randURL}`).then(res=> res.json()).then(res=> res.value);},
    animals:() => {
        return fetch(`${baseURL+cat[0]}`).then(res=> res.json()).then(res=> res.value);
    },
    careers:() => {
        return fetch(`${baseURL+cat[1]}`).then(res=> res.json()).then(res=> res.value);
    },
    celebs:() => {
    return fetch(`${baseURL+cat[2]}`).then(res=> res.json()).then(res=> res.value);
    },
    devs:() => {
        return fetch(`${baseURL+cat[3]}`).then(res=> res.json()).then(res=> res.value);
    },
    explicit:() => {
        return fetch(`${baseURL+cat[4]}`).then(res=> res.json()).then(res=> res.value);
    },
    fashion:() => {
        return fetch(`${baseURL+cat[5]}`).then(res=> res.json()).then(res=> res.value);
    },
    food:() => {
        return fetch(`${baseURL+cat[6]}`).then(res=> res.json()).then(res=> res.value);
    },
    history:() => {
        return fetch(`${baseURL+cat[7]}`).then(res=> res.json()).then(res=> res.value);
    },
    money:() => {
        return fetch(`${baseURL+cat[8]}`).then(res=> res.json()).then(res=> res.value);
    },
    movie:() => {
        return fetch(`${baseURL+cat[9]}`).then(res=> res.json()).then(res=> res.value);
    },
    music:() => {
        return fetch(`${baseURL+cat[10]}`).then(res=> res.json()).then(res=> res.value);
    },
    politics:() => {
        return fetch(`${baseURL+cat[11]}`).then(res=> res.json()).then(res=> res.value);
    },
    religion:() => {
        return fetch(`${baseURL+cat[12]}`).then(res=> res.json()).then(res=> res.value);
    },
    science:() => {
        return fetch(`${baseURL+cat[13]}`).then(res=> res.json()).then(res=> res.value);
    },
    sport:() => {
        return fetch(`${baseURL+cat[14]}`).then(res=> res.json()).then(res=> res.value);
    },
    travel:() => {
        return fetch(`${baseURL+cat[15]}`).then(res=> res.json()).then(res=> res.value);
    }}
   
   /*Jokes: {
        json_data: () => {
           const jk=fetch(`${baseURL}`).then(res=> res.json());
            return jk
    }
}, 
    QueryAnimal: {
        animals:() => {
            return fetch(`${baseURL+cat[0]}`).then(res=> res.json()).then(res=> res.value);
        
        }
    },
    */
    

   /* Categories:{
category:()=>{
    return fetch(`${catURL}`).then(data=> console.log(data[0]));
}

    }
*/
};

// 
/*const JokeType= new GraphQLObjectType({
    name:"Joke",
    fields:()=>({
       cretaed_at:{type:GraphQLString},
      id:{type:GraphQLString},
      icon_url:{type:GraphQLString},
        

    })

})

const RootQuery= new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        getJoke:{
            type: new GraphQLList(JokeType),
            resolve(parent,args){
                () => {
                    const jk=fetch(`${baseURL}`).then(res=> res.json());
                    console.log(jk);
                   return jk
                }
            }
        }
    }

})


const schema = new GraphQLSchema ({query:RootQuery})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))


app.listen(9000,()=>{
    console.log(`Server running `);
})






*/
const server = new ApolloServer({ typeDefs, resolvers });
server.listen(9000)
    .then(({ url }) => console.log(`Server running at ${url}`));


