import React from 'react'
import Logo from '../assets/logo/buyit.png'
import '../assets/css/header.css'

export default function Header(){
    return (
        <nav>
            <div className='nav--logo'>
                <img src={Logo} alt='Buy it logo' width='50px'/>
                <span>Buy it</span>
            </div>
            <div className='nav--menu'>
                <ul className='navigation-items'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>Featured</a></li>
                    <li><a href='#'>About Us</a></li>
                </ul>
                <input type='search' id='search' placeholder='search' />
                <div className='shopping-cart'>
                    <span id='itemCount'>0</span>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className='profile-container'>
                    <img src='https://media.istockphoto.com/photos/natural-beauty-picture-id151611999?k=20&m=151611999&s=612x612&w=0&h=aHGjBmGUGBTxBeHomIDBYBxd-je0ccSOfnHF9v13i2M='
                         alt='profle picture'
                        //  width='50px'
                         className='profile-picture'
                    />
                </div>
            </div>
        </nav>
    )
}