
import logo from './giphy.gif';
import React from 'react';
import './App.css';
import JokeDisplay from './Components/JokeDisplay.js'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from "@apollo/client";
import {ErrorLink, onError} from '@apollo/client/link/error';

const errorLink = onError(({graphqlErrors,networkError}) => {
    if (graphqlErrors){
        graphqlErrors.map(({message,location,path}) =>{
            alert('Graphql error $(message)');
        });
    }
});
<link rel="stylesheet" href="/Users/tinojokomo/Documents/dev-work/React Projects/chucknorris/src/index.css"></link>

const link= from([
    errorLink,
    new HttpLink({
        uri: "http://localhost:9000/graphql"
    })
])

const client =new ApolloClient ({
    cache:new InMemoryCache(),
    link:link
})

//192.168.1.55


    
    


function App() {

    return <ApolloProvider client={client}>
        < div className = "main" > 
        <div className = "top_wrapper" > 
        <h1 className="headings"> Welcome to the Chuck Norris Joke Fan Page </h1>
        <img src = {logo} alt="" className="App-logo"></img> 
     </div>
     <div className="body_jokes"><p className="headings">What Type of Joke would you like to see today ?</p>
     <p className="click">Re-click Category To See A New Joke :)</p>
     <div className="joke_wrapper">
         <div className="joke_categories">
         <JokeDisplay/>
         </div>
         
     </div>
     </div>


     </div>
     </ApolloProvider> ;
}

export default App;
