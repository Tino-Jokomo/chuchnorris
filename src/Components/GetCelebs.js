import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_CELEBS} from '../GraphQL/QueryCelebs.js'




function GetCelebs(){       //Get's relevant joke for category and displays a button that queries for that Joke upon request

const [loadCelebs, {called,loading,data,refetch}] = useLazyQuery(LOAD_CELEBS);

if (called && loading) return <p>Loading ...</p>
if (!called){
 return <button className="joke_button" onClick={() => loadCelebs()}>Celebrity</button>
}
        const{celebs} = data;
        
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Celebrity</button>
            <h1 className="joke">
               {celebs}
            </h1>
            </div>
           
        );


}

export default GetCelebs;