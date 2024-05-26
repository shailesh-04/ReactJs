import React,{useState,useEffect} from 'react'
import { useParams,Link,useNavigate} from 'react-router-dom';
import Axios from 'axios';

export default function Edit() {
  const navigator = useNavigate();
  const {Id} = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('')
  useEffect(() => {
    const form = new FormData();
      form.append('Id',Id);
      form.append('Op',"selectId");
        Axios.post('http://localhost:9000/index.php',form)
        .then((data) =>{
          setName(data.data.Name);
          setEmail(data.data.Email);
          setMobile(data.data.Mobile);
        });
    },[]);
  function handleData(){
    const form = new FormData();
    form.append('Id',Id);
    form.append('Op',"Edit");
    form.append('Name',name);
    form.append('Email',email);
    form.append('Mobile',mobile);
    Axios.post("http://localhost:9000/index.php",form)
    .then((data)=>{
      navigator("/");
    })
  }
  return (
    <div>
      <div className="container bg-light text-dark mt-4 p-5 w-50  position-relative">
        <div className="row mt-2">
          <div className="col text-center border-3 border-bottom ">
            <h1>Edit Data</h1>
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
              <Link to="/" className="btn btn-danger pe-5 ps-5">Cancel</Link>
            <div className="position-absolute bottom-0 text-success">{message}</div>
          </div>
        </div>
      </div>
    </div>
  )
}