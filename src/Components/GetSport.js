import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_SPORT} from '../GraphQL/QuerySport.js'




function GetSport(){    //Get's relevant joke for category and displays a button that queries for that Joke upon request

    const [loadSport, {called,loading,data,refetch}] = useLazyQuery(LOAD_SPORT);

    if (called && loading) return <p>Loading ...</p>
    if (!called){
     return <button className="joke_button" onClick={() => loadSport()}>Sport</button>
    }
        const{sport} = data;
     
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Sport</button>
            <h1 className="joke">
               {sport}
            </h1>
            </div>
        );


}

export default GetSport;