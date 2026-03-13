import React from 'react'
import {useEffect,useState} from "react"

export default function Viewbook() {
    const [books,setBooks]=useState([])

useEffect(()=>{
const storedBooks=JSON.parse(localStorage.getItem("books"))||[]
setBooks(storedBooks)
},[])
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h2>Book List</h2>

<table border="2">
<thead>
<tr>
<th>Book ID</th>
<th>Book Name</th>
<th>Author</th>
<th>Price</th>
<th>Publisher</th>
</tr>
</thead>

<tbody>
{books.map((b,i)=>(
<tr key={i}>
<td>{b.id}</td>
<td>{b.name}</td>
<td>{b.author}</td>
<td>{b.price}</td>
<td>{b.publisher}</td>
</tr>
))}
</tbody>

</table>

    </div>
  )
}
