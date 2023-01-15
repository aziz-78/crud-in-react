import React from 'react'
import { useParams,useNavigate  } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const Update = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  
  useEffect(()=>{getUsers()},[]
 )
  const getUsers = () =>{
    
    axios.get(`http://localhost/react_apis/read1.php?id=${id}`).then(
      function(response){
        let p = response.data;
        setName(p.name);
        setPassword(p.password);
        
    }
    )
    
  }
  
   
  const handleSubmit = () => {
    axios.put("http://localhost/react_apis/update.php",{id,name,password}).then(response=> alert(response.data )).catch(error=> alert(error))
    navigate("/")
    setName("")
    setPassword("")
  }
  return (
    <div>
      <div className="mt-5">
           <h5 className='mx-auto'>Update form</h5>

          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            name="submit"
            id="submit"
            value="SEND"
            className="btn btn-outline-primary"
            onClick={handleSubmit}
            
          >
            Submit
          </button>
        </div>
    </div>
  )
}

export default Update
