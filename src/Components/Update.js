import './Update.css';
import React, { useState } from 'react';
import Axios from 'axios';
import *as Falcons from "react-icons/fa";
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';

function Update() {
  const [customerName,setbookingname ] = useState('');
  const [applianceId,  setbookingid] = useState('');

  const [Model, setmodname] = useState('');
  const [Product, setprodname] = useState('');
  // eslint-disable-next-line no-unused-vars

  const [problemDescription, setdesp] = useState('');
  const [mobileNo, setcustnumber] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleButtonClick = () => {
      setIsSubmitted(!isSubmitted);
    };

  const handleSubmit = (e) => {
      e.preventDefault();

      Axios.put(`http://localhost:8080/updatebyid/${applianceId}`, {
        customerName: customerName,
        applianceId: applianceId,

    Model:Model,
    Product:Product,
        problemDescription: problemDescription,
        mobileNo: mobileNo,
      })
  }

  return (
    <div className="App">
      <header className="App-header">
      <div>
          <IconButton className='but'>
              <Link to='/' className='butt butt-link'>
                  <Falcons.FaHome/>
              </Link>
          </IconButton>

          <IconButton className='but'>
              <Link to='/show' className='butt butt-link'>
                  <Falcons.FaEye/>
              </Link>
          </IconButton>
      </div> 
        <div className="logInnform">
            <form onSubmit={handleSubmit}>
            <p> Enter the Appliance id</p>
        <input
          type='number'
          placeholder='Appliance ID'
          value={applianceId}
          onChange={(e) => setbookingid(e.target.value)}
        />
       <p>  Enter the Customer Name</p> 
        <input
          type='text'
          placeholder='Customer Name'
          value={customerName}
          onChange={(e) => setbookingname(e.target.value)}
        />
     <p>    Enter the Product Name</p> 
        <input
          type='text'
          placeholder='Product Name'
          value={Product}
          onChange={(e) => setprodname(e.target.value)}
        />
      <p>   Enter the Model Name </p>
        <input
          type='text'
          placeholder='Model Name'
          value={Model}
          onChange={(e) => setmodname(e.target.value)}
        />
       
      
      <p>  Enter the  Mobile No </p> 
        <input
          type='number'
          placeholder='Mobile No'
          value={mobileNo}
          onChange={(e) => setcustnumber(e.target.value)}
        />
    
    <p>    Enter the Problem Description </p> 
        <input
          type='text'
          placeholder='Problem Description'
          value={problemDescription}
          onChange={(e) => setdesp(e.target.value)}
        />

                <div class="btnncontainer">
                    <button id="btn4" type="submit" onClick={handleButtonClick}>Update</button>
                    {isSubmitted && <p id="btn4-text" class="popup-message">Updated Successfully!</p>}
                </div>
            </form>
        </div>
      </header>
    </div>
  );
}

export default Update;