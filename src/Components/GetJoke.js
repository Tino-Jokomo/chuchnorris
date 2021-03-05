import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_JOKES} from '../GraphQL/Queries.js'




function GetJoke(){     //Get's relevant joke for category and displays a button that queries for that Joke upon request

const [loadJoke, {called,loading,data,refetch}] = useLazyQuery(LOAD_JOKES);
  
  
    if (called && loading) return <p>Loading ...</p>
   if (!called){
    return <button className="joke_button" onClick={() => loadJoke()}>Random Joke</button>
}
   //<button onClick={() => loadJoke()}>Random Joke</button>
   const{joke} = data; 
    return (
        <div className="categories">
        <button className="joke_button" onClick={() => refetch()}>Random Joke</button>
        <h1 className="joke">
           {joke}
        </h1>
        </div>
    );
        
        
        


}

export default GetJoke;