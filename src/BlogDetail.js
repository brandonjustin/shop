import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom";

const BlogDetail = () =>{

    const { id } = useParams();
    const {data:blog,spending,error} = useFetch('http://localhost:8000/blogs/'+id );
const history = useHistory();
const handleClick =()=>{
    fetch('http://localhost:8000/blogs/'+blog.id,{
        method:'DELETE'
    }).then(()=>{
        history.push('/')
    })
}



return(
<div className="blog-detail">
<div>{spending}</div>
{error && <h1>{error}</h1>}  

{blog && (
    <article>
        <h1>{blog.title} </h1>
        <div>{blog.body}</div>
        <button onClick={handleClick}>delete</button>
        
    </article>
)}

</div>
)

}
export default BlogDetail;