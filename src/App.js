import React from 'react';
import './App.css';
import Update from './Components/Update';
import Delete from './Components/Delete';
import Add from './Components/Add';
import UserCard from "./UserCard";
import Show from './Components/Show';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    // <div >
    //   <div id="showws"><Show/></div>
    //   <div id="adds"><Add/></div>
    //   <div id="dels"><Delete/></div>
    //   <div id="upd"><Update/></div>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<UserCard/>} />
      <Route path='/show' element={<Show/>} />
      <Route path='/add' element={<Add/>} />
      <Route path='/delete' element={<Delete/>} />
      <Route path='/update' element={<Update/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
