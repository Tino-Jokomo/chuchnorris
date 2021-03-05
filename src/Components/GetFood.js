import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_FOOD} from '../GraphQL/QueryFood.js'




function GetFood(){ //Get's relevant joke for category and displays a button that queries for that Joke upon request

    const [loadFood, {called,loading,data,refetch}] = useLazyQuery(LOAD_FOOD);

    if (called && loading) return <p>Loading ...</p>
    if (!called){
     return <button className="joke_button" onClick={() => loadFood()}>Food</button>
    }
        const{food} = data;
       
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Food</button>
            <h1 className="joke">
               {food}
            </h1>
            </div>
           
        );


}

export default GetFood;