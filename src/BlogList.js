import React from "react";

const BlogList = ({ blogs, title }) => {
    // const blogs =props.blogs
    return (
        <div className="BlogList">
            <h1>{title}</h1>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                         <a href={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    </a>
                </div>
               

            )) 
            }
        </div>
    );

}

export default BlogList