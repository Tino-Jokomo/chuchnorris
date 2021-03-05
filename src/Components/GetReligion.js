import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_RELIGION} from '../GraphQL/QueryReligion.js'




function GetReligion(){ //Get's relevant joke for category and displays a button that queries for that Joke upon request

    const [loadReligion, {called,loading,data,refetch}] = useLazyQuery(LOAD_RELIGION);

    if (called && loading) return <p>Loading ...</p>
    if (!called){
     return <button className="joke_button" onClick={() => loadReligion()}>Religion</button>
    }
        const{religion} = data;
       
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Religion</button>
            <h1 className="joke">
               {religion}
            </h1>
            </div>
           
        );


}

export default GetReligion;