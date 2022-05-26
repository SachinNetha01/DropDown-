import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './App.css'


const DropDown = () => {
 const[data,setData]=useState([]);
 const[displayName,setDisplayName]=useState([])

 useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response=>setData(response.data))
  .then(error=>console.log(error))
 },[])

  const changeHandler=(e)=>{
    axios.get("https://jsonplaceholder.typicode.com/users/" + e.target.value)
    .then(response=>setDisplayName(response.data))
    .then(error=>console.log(error))
  }
  return <div>
    <select style={{width:200, margin:10}} onChange={changeHandler} className="col-col-md-4">
      <option value="0">---Select User---</option>
  {
  data.map(( user ) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))
  }
</select>
<br /><br />
<Table striped bordered hover className="table table-dark">
  <thead>
  <tr>
<td>ID</td>
<td>Name</td>
<td>Username</td>
<td>Email</td>
<td>Phone</td>
<td>website</td>
</tr>
  </thead>
 <tbody>
   {
   <tr>    
    <td>{displayName.id}</td>
     <td>{displayName.name}</td>
     <td>{displayName.username}</td>
     <td>{displayName.email}</td>   
     <td>{displayName.phone}</td>
     <td>{displayName.website}</td>        
   </tr>
      }
 </tbody>

</Table>
    </div>;
};

export default DropDown;
