import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import New from './Componant/New.jsx';
import Show from './Componant/Show.jsx';
import Edit from './Componant/Edit.jsx';
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Show/>}></Route>
          <Route path='/New' element={<New/>}></Route>
          <Route path='/:Id/Edit' element={<Edit/>}></Route>
        </Routes>
       </BrowserRouter> 
    </>
  )
}
export default App
