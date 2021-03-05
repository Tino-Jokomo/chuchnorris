import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_HISTORY} from '../GraphQL/QueryHistory.js'




function GetHistory(){

    const [loadHistory, {called,loading,data,refetch}] = useLazyQuery(LOAD_HISTORY);

    if (called && loading) return <p>Loading ...</p>
    if (!called){
     return <button className="joke_button" onClick={() => loadHistory()}>History</button>
    }
        const{history} = data;
    
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>History</button>
            <h1 className="joke">
               {history}
            </h1>
            </div>
           
        );


}

export default GetHistory;