import React from "react";
import {useState,useEffect } from "react";

const useFetch = (url) =>{

    const [data,setData] = useState(null);
    const [spending,setSpending] = useState("loading..");
    const [error,setError] = useState(null);
    
    
    
    useEffect(()=>{
        fetch(url)
        .then(res=>{
          if(!res.ok){
              throw Error ("Page not found in the server!")
          }
            return res.json();
    
        })
        .then(data=>{
            setSpending(false);
            setData(data);
        })
           .catch(err=>{
            setError(err.message);
            setSpending(false)
           })
    
    } ,[url]);
    
return {data,spending,error}





}

export default useFetch;