import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_DEVS} from '../GraphQL/QueryDevs.js'




function GetDevs(){     //Get's relevant joke for category and displays a button that queries for that Joke upon request

    const [loadDevs, {called,loading,data,refetch}] = useLazyQuery(LOAD_DEVS);

    if (called && loading) return <p>Loading ...</p>
if (!called){
 return <button className="joke_button" onClick={() => loadDevs()}>Dev Jokes</button>
}
        const{devs} = data;
       
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Dev Jokes</button>
            <h1 className="joke">
               {devs}
            </h1>
            </div>
           
        );


}

export default GetDevs;