import React from 'react';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Main from './Component/main.jsx';
import './App.css';
export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}