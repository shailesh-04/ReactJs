import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import Axios from 'axios';
export default function Show() {
  const navigator = useNavigate();
  const [data, setData] = useState([]);
  
    useEffect(() => {
      Fetch();
    }, []);
    function Fetch(){
      //fetch('http://localhost:8080/Show.php').then(response => response.json()).then(data => setData(data)).catch(error =>console.error('Error fetching data:', error));  
      const form = new FormData();
      form.append('Op',"selectAll");
      Axios.post('http://localhost:9000/index.php',form)
      .then((data)=>{
      setData(data.data);    
      });
    }
    function Delete(e){
      const form = new FormData();
      form.append('Op',"delete");
      form.append('Id',e);
      Axios.post('http://localhost:9000/index.php',form)
      .then((data)=>{
      Fetch();
      });
    }
    return (
      <div className="p-5">
        <table className="table text-dark bg-light border-info">
          <thead>
            <tr>
              <th colSpan="4">
                <h1 className=" p-2 text-danger border-bottom border-5 border-danger">PHP CURD Operation</h1>
              </th>
              <th className="text-center">
                <Link to="/New" className="btn text-decoration-none bg-info text-dark p-2 ps-5 pe-5">New</Link>
              </th>
            </tr>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th className="text-center">#Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el,index)=>
              <tr key={index}>
                <td>{el.Id}</td>
                <td>{el.Name}</td>
                <td>{el.Email}</td>
                <td>{el.Mobile}</td>
                <td className="text-center">
                  <Link to={`/${el.Id}/Edit`} className="text-decoration-none bg-success text-dark p-2 ps-5 pe-5 me-1 rounded">Edit</Link>
                  <button className="rounded text-decoration-none bg-danger text-dark p-2 ps-3 pe-3 btn-outline-none border-0" onClick={()=>Delete(el.Id)}>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
}