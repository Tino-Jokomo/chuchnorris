import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_TRAVEL} from '../GraphQL/QueryTravel.js'




function GetTravel(){   //Get's relevant joke for category and displays a button that queries for that Joke upon request

    const [loadTravel, {called,loading,data,refetch}] = useLazyQuery(LOAD_TRAVEL);

    if (called && loading) return <p>Loading ...</p>
    if (!called){
     return <button className="joke_button" onClick={() => loadTravel()}>Travel</button>
    }
        const{travel} = data;
       
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Travel</button>
            <h1 className="joke">
               {travel}
            </h1>
            </div>
        );


}

export default GetTravel;