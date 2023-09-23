import React, { useEffect, useState } from 'react';
import ModalEntity from '../TableDetails/ModalEntity';
import "./Show.css";
import *as Falcons from "react-icons/fa";
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';

export default function Show() {

    const [customers,setCustomers] = useState([]);

    useEffect(() =>{
            getCustomers( )
        },[])

    const getCustomers =()=>{

        ModalEntity.getCustomers().then((response) =>{
            setCustomers(response.data)
        })
    }

  return (
    <div>
        <div>
          <IconButton className='but'>
              <Link to='/' className='butt butt-link'>
                  <Falcons.FaHome/>
              </Link>
          </IconButton>
      </div>
    <div className='container bx'>
        <h1 className='text-center  vv'><p/><p/>Books Reviews Application</h1>
        <table className='table table-striped '>
           <thead>
            <tr>
            <th>Customer Name</th>
            <th>Appliance ID</th>
            <th>Product Name</th>
            <th>Model Name</th>
            <th>Problem Description</th>
            <th>Mobile No</th>
            </tr>
           </thead>
           <tbody>
            {
                customers.map(
                    ct=>
                    <tr key = {ct.id}>
                 
              <td>{ct.customerName}</td>
              <td>{ct.bookingid}</td>
              <td>{ct.prodname}</td>
              <td>{ct.modname}</td>
              <td>{ct.desp}</td>
              <td>{ct.custnumber}</td>
                    </tr>
                  
                )
            }
           </tbody>
        </table>
    </div>
    </div>
  )
}
