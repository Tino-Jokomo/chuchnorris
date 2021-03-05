import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_SCIENCE} from '../GraphQL/QueryScience.js'




function GetScience(){  //Get's relevant joke for category and displays a button that queries for that Joke upon request

    const [loadScience, {called,loading,data,refetch}] = useLazyQuery(LOAD_SCIENCE);

    if (called && loading) return <p>Loading ...</p>
    if (!called){
     return <button className="joke_button" onClick={() => loadScience()}>Science</button>
    }
        const{science} = data;
     
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Science</button>
            <h1 className="joke">
               {science}
            </h1>
            </div>
        );


}

export default GetScience;