import React from 'react'
import IMG from './IMG.jpg';
import './style.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
function Card() {

    const [user, setUser] = useState();
    useEffect(() => {
         const checkUser = async () => {
             try {
                 const res = await axios.get("checkuser");
                 if(res.data.success) {
                     console.log(res.data);
                     setUser(res.data.user);
                 }
                 else {
                     console.log(res.data.error);
                 }
             } catch (error ) {
                 console.log(error.message);
             }
         }
         checkUser();
    }, []) 
    return (
        <div className="card">
            <div className="card__header">
                <img src={IMG} />
            </div>

            <div className="card__middle">
            <div className="card__bottom">
                <a href="#">Home</a>
                <a href="#">Posts</a>
            </div>
           {!user && <div class="card__user">
                <Link  to="" >Login</Link>
                <Link  to="">Register</Link>
            </div> }
            { user && <div class="card__user">
                <Link  to="" >{user.fullName}</Link>
                <Link  to="">Logout</Link>
            </div> }


            </div>
            
        </div>
    )
}

export default Card
