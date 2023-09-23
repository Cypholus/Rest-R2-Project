import React,{useState} from 'react'
import "./UserCard.css";
import *as Falcons from "react-icons/fa";
import img from "./Images/Blackpearl.png"
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';


export default function UserCard() {
    const [detail,setDetail] = useState(false);
    
  return (
    <div>
    <div className='main center'>
        <div className='box center'>
            <img src={img} alt='Weeee'/>
            <div>
                <p className='appname center'>Black Pearl</p>
                <p className='status center'>Est.2023</p>
            </div>
            <div className='arrow center' onClick={() => setDetail(true)}>
                <Falcons.FaArrowRight className='fas'/>
            </div>
            <div className={detail ? 'left_container active' :'left_container off'}>
                <p><Falcons.FaSearch/> Search</p>
                <div className='searchs'>
                     
                        <div>
                            <button className='butt'><Link to='/add' className='butt-link'>Add</Link></button>
                        </div>
                        <div>
                            <button className='butt'><Link to='/update' className='butt-link'>Update</Link></button>
                        </div>
                        <div>
                            <button className='butt'><Link to='/delete' className='butt-link'>Delete</Link></button>
                        </div>
                        <div>
                            <IconButton className='butt'>
                                <Link to='/show' className='butt butt-link'>
                                    <Falcons.FaEye/>
                                </Link>
                            </IconButton>
                        </div>
                       
                </div>
                <div className='icons'>
                    <IconButton className='fab' href="https://github.com/Yogeshpj">
                        <Falcons.FaGithub/>
                    </IconButton>
                    <IconButton className='fab' href="https://www.linkedin.com/in/yogesh-jayachandran-a821a8226/">
                        <Falcons.FaLinkedin/>
                    </IconButton>
                    <IconButton className='fab' href="https://www.instagram.com/yogesh._.04_/">
                        <Falcons.FaInstagram />
                    </IconButton>
                </div>
                <div>
                    <div className='cancel center'  onClick={() => setDetail(false)}>
                        <Falcons.FaTimes className='faS'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}