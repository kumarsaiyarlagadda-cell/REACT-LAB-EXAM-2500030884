import { Link } from "react-router-dom"

function Navbar(){

return(

<div style={{backgroundColor:"black",color:"white",padding:"12px",display:"flex",color:"white",justifyContent:"space-around",}}>

<Link  to="/" style={{color:"white"}}>Home</Link>
<Link  to="/addbook" style={{color:"white"}}>Add Book</Link>
<Link  to="/viewbook" style={{color:"white"}}>View Books</Link>
<Link  to="/api" style={{color:"white"}}>API Data</Link>

</div>

)

}

export default Navbar