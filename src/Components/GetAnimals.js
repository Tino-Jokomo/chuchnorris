import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_ANIMALS} from '../GraphQL/QueryAnimals.js'




function GetAnimals(){      //Get's relevant joke for category and displays a button that queries for that Joke upon request

    const [loadAnimals, {called,loading,data,refetch}] = useLazyQuery(LOAD_ANIMALS);

    if (called && loading) return <p>Loading ...</p>
   if (!called){
    return <button className="joke_button" onClick={() => loadAnimals()}>Animals</button>
}
        const{animals} = data;
       
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Animals</button>
            <h1 className="joke">
               {animals}
            </h1>
            </div>
           
        );


}

export default GetAnimals;