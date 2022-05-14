import React from "react";
import { useState, useEffect } from "react";
import BlogList from './BlogList'
import useFetch from './useFetch'


const Home = () =>{

  const {data:blogs,spending,error} = useFetch('  http://localhost:8000/blogs');

return( 

<div className="container">
  {error && <h1>{error}</h1>}  
    <p>{spending}</p>
{blogs && <BlogList blogs={blogs} title="All Blogs"/>}
</div>

);

}
export default Home