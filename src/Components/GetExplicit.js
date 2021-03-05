import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_EXPLICIT} from '../GraphQL/QueryExplicit.js'




function GetExplicit(){     //Get's relevant joke for category and displays a button that queries for that Joke upon request

    const [loadExplicit, {called,loading,data,refetch}] = useLazyQuery(LOAD_EXPLICIT);

    if (called && loading) return <p>Loading ...</p>
if (!called){
 return <button className="joke_button" onClick={() => loadExplicit()}>Explicit</button>
}
        const{explicit} = data;
  
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Explicit</button>
            <h1 className="joke">
               {explicit}
            </h1>
            </div>
           
        );


}

export default GetExplicit;