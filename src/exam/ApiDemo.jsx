import React from 'react'
import {useEffect,useState} from "react"

export default function ApiDemo() {
const [data,setData]=useState([])

useEffect(()=>{
fetch("https://dummy-json.mock.beeceptor.com/companies")
.then(res=>res.json())
.then(d=>setData(d))
},[])

return (
<div>
<h2>API Data</h2>

<table border="1">
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Country</th>
<th>Industry</th>
</tr>
</thead>

<tbody>
{data.map((item)=>(
<tr key={item.id}>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.country}</td>
<td>{item.industry}</td>
</tr>
))}
</tbody>

</table>

</div>
)
}