import React from 'react'
import IMG from './IMG.jpg';
import './style.css';
function Card() {
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
            <div className="card__search">
                  <i className="fa fa-search"></i>
                  <input type="text" placeholder="search"></input>
            </div>
            </div>
            
        </div>
    )
}

export default Card
