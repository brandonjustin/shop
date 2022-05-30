import React from "react";

var Navbar = () =>{
return(
<div className="navbar">
<h1 className="logo">LURIX</h1>
<div className="links">
<Link to="/" className="nav-btn">Home</Link>
<Link to="/create" className="nav-btn">New Blog</Link>


</div>

</div>

)

}

export default Navbar