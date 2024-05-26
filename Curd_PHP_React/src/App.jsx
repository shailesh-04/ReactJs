import './App.css'
import {useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Axios from 'axios';
import New from './Componant/New.jsx';
import Show from './Componant/Show.jsx';
import Edit from './Componant/Edit.jsx';

function App() {
  function Error(){
    return(
      <h1> ERROR <br/> {data}</h1>
      );
  }
  const [data,setData] = useState("");
  useEffect(()=>{
    Axios.get("http://localhost:9000/connection.php")
    .then((data)=>{
      setData(data.data);
    });
  },[]);
  return (
    <>
       <BrowserRouter>
        <Routes>
          {<Route path='/' element={data==""?<Show/>:<Error/>}></Route>}
          <Route path='/New' element={<New/>}></Route>
          <Route path='/:Id/Edit' element={<Edit/>}></Route>
        </Routes>
       </BrowserRouter> 
    </>
  )
}
export default App
