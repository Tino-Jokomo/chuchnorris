import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_MONEY} from '../GraphQL/QueryMoney.js'




function GetMoney(){

    const [loadMoney, {called,loading,data,refetch}] = useLazyQuery(LOAD_MONEY);

    if (called && loading) return <p>Loading ...</p>
    if (!called){
     return <button className="joke_button" onClick={() => loadMoney()}>Money</button>
    }
        const{money} = data;
     
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Money</button>
            <h1 className="joke">
               {money}
            </h1>
            </div>
        );


}

export default GetMoney;