import React from "react";
import '../assets/css/banner.css'
import { Link } from "react-router-dom";

export default function Banner(){
    return(
        <div className="banner">
            <h1 className="banner--header">Run your World with <br/> the Right <span>Shoes</span></h1>
            <p>Never be caught unfresh at any moment, follow the ever evolving fashion <br/> and get the right sneakers today.</p>
            <button className="shop-now">
                <Link to="/products">
                    <i className="fa-solid fa-bag-shopping"></i>
                    SHOP NOW
                </Link>
            </button>
        </div>
    )
}