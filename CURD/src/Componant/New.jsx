import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import Axios from 'axios';
export default function New() {
  const navigate = useNavigate();
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [massage,setMassage] = useState('');
  const [table,setTable] = useState([]);
  
function handleData(e){
    e.preventDefault();
  let formData = new FormData();
    formData.append("Name",name);
    formData.append("Email",email);
    formData.append("Mobile",mobile);
    formData.append("Op","new");
    
  Axios.post("http://localhost:8080/index.php",formData)
  .then((res) => {
      setMassage(res.data);
      setMobile('');
      setEmail('');
      setName('');
     // navigate("/");
  })
  .catch(error => alert(error));
}
  return (
  <div>
    <div className="container bg-light text-dark mt-4 p-5 w-50  position-relative">
      <div className="row mt-2">
        <div className="col text-center border-3 border-bottom ">
          <h1>Insert New Data</h1>
        </div>
      </div>
      
      <div className="row mt-3  d-flex flex-column">
        <div className="col">
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" className="form-control" placholder="Enter Name.." 
            value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="col">
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" id="Email" className="form-control" placholder="Enter Email.." 
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
      </div>
      <div className="row mt-3  d-flex flex-column">
        <div className="col">
          <label htmlFor="Address">Mobile</label>
          <input type="number" name="Address" className="form-control" id="Address" placholder="Enter Address.."
            value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6 d-flex gap-5">
          <input type="submit" name="submin" className="btn btn-info pe-5 ps-5" value="Submin" onClick={handleData}/>
            <Link to="/" className="btn btn-danger pe-5 ps-5">Show</Link>
          <div className="position-absolute bottom-0 text-success">{massage}</div>
        </div>
      </div>
    </div>
  </div>
  );
}