import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_POLITICS} from '../GraphQL/QueryPolitics.js'




function GetPolitics(){ //Get's relevant joke for category and displays a button that queries for that Joke upon request

    const [loadPolitics, {called,loading,data,refetch}] = useLazyQuery(LOAD_POLITICS);

    if (called && loading) return <p>Loading ...</p>
    if (!called){
     return <button className="joke_button" onClick={() => loadPolitics()}>Politics</button>
    }
        const{politics} = data;
       
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Politics</button>
            <h1 className="joke">
               {politics}
            </h1>
            </div>
           
        );


}

export default GetPolitics;