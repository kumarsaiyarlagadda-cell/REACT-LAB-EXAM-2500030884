import {useState} from "react"

function Addbook(){

const [book,setBook]=useState({
id:"",
name:"",
author:"",
price:"",
publisher:""
})

const handleChange=(e)=>{
setBook({...book,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
e.preventDefault()
let books=JSON.parse(localStorage.getItem("books"))||[]
books.push(book)
localStorage.setItem("books",JSON.stringify(books))
alert("------Book Added Successfully------")
}

return(
<div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"80px"}}>

<form onSubmit={handleSubmit} style={{border:"2px solid black",padding:"30px",width:"250px",textAlign:"center",borderRadius:"8px",backgroundColor:"#f3f4f6"}}>
    <h2 style={{fontFamily:"sans-serif"}}>Add Book</h2>
<input type="text" name="id" placeholder="Book ID" onChange={handleChange} style={{width:"100%",marginTop:"20px",padding:"6px",border:"1px solid black",borderRadius:"4px",boxSizing:"border-box",height:"32px"}}/><br/>
<input type="text" name="name" placeholder="Book Name" onChange={handleChange} style={{width:"100%",marginTop:"20px",padding:"6px",border:"1px solid black",borderRadius:"4px",boxSizing:"border-box",height:"32px"}}/><br/>
<input type="text" name="author" placeholder="Author" onChange={handleChange} style={{width:"100%",marginTop:"20px",padding:"6px",border:"1px solid black",borderRadius:"4px",boxSizing:"border-box",height:"32px"}}/><br/>
<input type="text" name="price" placeholder="Price" onChange={handleChange} style={{width:"100%",marginTop:"20px",padding:"6px",border:"1px solid black",borderRadius:"4px",boxSizing:"border-box",height:"32px"}}/><br/>
<input type="text" name="publisher" placeholder="Publisher" onChange={handleChange} style={{width:"100%",marginTop:"20px",padding:"6px",border:"1px solid black",borderRadius:"4px",boxSizing:"border-box",height:"32px"}}/><br/>
<button type="submit" style={{marginTop:"25px",backgroundColor:"#2563eb",color:"white",padding:"6px ",border:"1px solid black",borderRadius:"3px"}}>Add Book</button>
</form>

</div>
)
}

export default Addbook