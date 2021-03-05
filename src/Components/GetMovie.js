import React,{useEffect,useState} from "react";
import {useQuery,gql,Query,useLazyQuery} from "@apollo/client";
import {LOAD_MOVIE} from '../GraphQL/QueryMovie.js'




function GetMovie(){

    const [loadMovie, {called,loading,data,refetch}] = useLazyQuery(LOAD_MOVIE);

    if (called && loading) return <p>Loading ...</p>
    if (!called){
     return <button className="joke_button" onClick={() => loadMovie()}>Movie</button>
    }
        const{movie} = data;
       
        return (
            <div className="categories">
            <button className="joke_button" onClick={() => refetch()}>Movie</button>
            <h1 className="joke">
               {movie}
            </h1>
            </div>
           
        );


}

export default GetMovie;