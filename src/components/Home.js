import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';
const Home = () => {
 const [names,setNames] = useState([]);
 
 const getUsers = () =>{
  axios.get("http://localhost/react_apis/read.php").then(function(response){
      setNames(response.data)
      
  })
}
 useEffect(()=>{
    getUsers();
 },[])
 const deleteUser = (Id) =>{
  axios.delete(`http://localhost/react_apis/delete.php/${Id}`).then((response)=>
  console.log(response.data))
  getUsers()
 }
  return (
   
    <div>
       
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      
      <th scope="col">update</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
   {names.map((element,index) => 
    
      
     <tr key={index}>
      <td>{index + 1}</td>
      <td>{element.name}</td>
      <td>< Link to={`/update/${element.Id}`} className='btn btn-outline-primary btn-sm' >Update</Link></td>
      <td><button className='btn btn-outline-danger btn-sm' onClick={()=>deleteUser(element.Id)}>Delete</button></td>
     </tr>
     
   
   )}
  </tbody>
</table>
 
    </div>
  )
}

export default Home
