import React from "react";
import '../assets/css/banner.css'

export default function Banner(){
    return(
        <div className="banner">
            <h1 className="banner--header">Run your World with <br/> the Right <span>Shoes</span></h1>
            <p>Never be caught unfresh at any moment, follow the ever evolving fashion <br/> and get the right sneakers today.</p>
            <button className="shop-now">
                <i className="fa-solid fa-bag-shopping"></i>
                SHOP NOW
            </button>
        </div>
    )
}