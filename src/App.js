import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Create from './components/Create'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Update from './components/Update';


function App() {
  
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const handleSubmit = () => {
    if(name.length === 0){
      alert("Name has been left Blank!");
    }
    else if(password.length < 6 ){
      alert("password must be atleast 6 characters!");
    }
    
    else{
      const url = 'http://localhost/react_apis/enquiry.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('password', password);
      
      axios.post(url, {name,password}).then(response=> alert(response.data )).catch(error=> alert(error));
      setName("")
      setPassword("")
      
      

    }
  }

  
  return (
    <Router>
    <div className='container'>
      <Header/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path ='/create' element = {<Create handle_submit ={handleSubmit} name = {name} setName = {setName} password = {password} setPassword = {setPassword}/>}/>
        <Route path = '/update/:id' element={<Update/>}/>
        
     </Routes>
    </div>
    </Router>
  );
}

export default App;
