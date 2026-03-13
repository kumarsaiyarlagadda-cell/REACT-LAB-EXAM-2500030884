import {useState} from "react"

function Addbook(){
const [book,setBook]=useState("")

const handleChange=(e)=>{
setBook({...book,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
e.preventDefault()
let books=JSON.parse(localStorage.getItem("books"))||[]
books.push(book)
localStorage.setItem("books",JSON.stringify(books))
alert("Book Added")
}

return(
<div>
<h2>Add Book</h2>
<form onSubmit={handleSubmit}>
<input type="text" name="id" placeholder="Book ID" onChange={handleChange}/> <br/>
<input type="text" name="name" placeholder="Book Name" onChange={handleChange}/><br/>
<input type="text" name="author" placeholder="Author" onChange={handleChange}/><br/>
<input type="text" name="price" placeholder="Price" onChange={handleChange}/><br/>
<input type="text" name="publisher" placeholder="Publisher" onChange={handleChange}/><br/>
<button type="submit">Add Book</button>
</form>
</div>
)
}

export default Addbook