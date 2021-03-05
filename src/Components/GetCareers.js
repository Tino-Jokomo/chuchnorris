import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_CAREERS} from '../GraphQL/QueryCareers.js'




function GetCareers(){      //Get's relevant joke for category and displays a button that queries for that Joke upon request

    const [loadCareers, {called,loading,data,refetch}] = useLazyQuery(LOAD_CAREERS);

    if (called && loading) return <p>Loading ...</p>
    if (!called){
     return <button className="joke_button" onClick={() => loadCareers()}>Careers</button>
 }
        const{careers} = data;
       
        return (
            <div className="categories">
            <button  className="joke_button"onClick={() => refetch()}>Careers</button>
            <h1 className="joke">
               {careers}
            </h1>
            </div>
           
        );


}

export default GetCareers;