import React from 'react'
import './style.css';
function NavBar() {
    return (
        <div className="nav">
             <div className="nav__logo" >LOGO</div>
             <div className="nav__middle">
                 <a href="#" >Home</a>
                 <a href="#">Posts</a>
                 <a href="#">About us</a>
             </div>
             <div className="nav__media">
                 <a href="#"><i className="fa fa-facebook-square"></i></a>
                 <a href="#"><i className="fa fa-twitter-square"></i></a>
                 <a href="#"><i className="fa fa-instagram"></i></a>
                 <a href="#"><i className="fa fa-linkedin-square"></i></a>
             </div>
        </div>
    )
}

export default NavBar
