import React from 'react'
import IMG from './IMG.jpg';
import './style.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
function Card() {

    const history = useHistory();
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


    const logout = async () => {
        try {
            const res = axios.get("logout");
             if(res.data.success) {
                 history.push("/login");
             }else {
                 console.log(res.data.error);
             }
        } catch(error) {
            console.log(error.message);
        }
    }

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
                <Link  to="/login" >Login</Link>
                <Link  to="/register">Register</Link>
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
