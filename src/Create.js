import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create =()=>{
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('Brandon')
    const [spending,setSpending] = useState(false)
    const history =useHistory();

    const handleSubmit = (e) =>{
e.preventDefault();
const blog = {title,body,author};
setSpending(true);

fetch( 'http://localhost:8000/blogs',{
    method:'POST',
    headers:{"content-type":"application/json"},
    body:JSON.stringify(blog)
}).then(()=>{
    setSpending(false);
    history.push('/');
})
    }

return( <div className="container">
    <h2>Add a New Blog.</h2>
    <form onSubmit={handleSubmit}>
        <label >Blog Title</label>
        <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="">Text Body</label>
        <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
        <label >Blog Author :</label>
        <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
            <option value="Brandon">Brandon</option>
            <option value="Charly">Charly</option>
            <option value="Jordane">Jordane</option>
        </select>
        {!spending && <button>Add Blog</button>}
        {spending && <button disabled>Adding blog..</button>}
     



    </form>
    </div>
    )
}

export default Create;