import React, { useContext } from 'react'
import Logo from '../assets/logo/buyit.png'
import '../assets/css/header.css'
import {Link} from "react-router-dom"
import { Context } from '../Context'

export default function Header(){
    let {cart} = useContext(Context)
    return (
        <header>
            <nav className='desktop--nav'>
                <div className='nav--logo'>
                    <img src={Logo} alt='Buy it logo' width='50px'/>
                    <span>Buy it</span>
                </div>
                <div className='nav--menu'>
                    <ul className='navigation-items'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><a href='#'>Featured</a></li>
                        <li><a href='#'>About Us</a></li>
                    </ul>
                    <input type='search' id='search' placeholder='search' />
                    <div className='shopping-cart'>
                        <Link to="/cart">
                            <span id='itemCount'>{cart.length}</span>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </div>
                    <div className='profile-container'>
                        <img src='https://media.istockphoto.com/photos/natural-beauty-picture-id151611999?k=20&m=151611999&s=612x612&w=0&h=aHGjBmGUGBTxBeHomIDBYBxd-je0ccSOfnHF9v13i2M='
                            alt='profle picture'
                            className='profile-picture'
                        />
                    </div>
                </div>
            </nav>
            <Headermobile />
            <NavMenu />
        </header>
    )
}
function Headermobile(){
    let {cart} = useContext(Context)
    function showNav(){
        let navMenu = document.querySelector('.mobile--menu');
        navMenu.addEventListener('click', () =>{
            let navMenu = document.querySelector('.mobile-nav--menu');
            if (navMenu.style.display == 'none'){
                navMenu.style.display = 'block';
            } else {
                navMenu.style.display = 'none';
            }
        })
    }
    return(
        <nav className='mobile--nav'>
            <div className='mobile--menu' onClick={showNav}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className='nav--logo'>
                <img src={Logo} alt='Buy it logo' width='50px'/>
                <span>Buy it</span>
            </div>
            <div className='shopping-cart'>
                <span id='itemCount'>{cart.length}</span>
                    <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className='profile-container'>
                <img src='https://media.istockphoto.com/photos/natural-beauty-picture-id151611999?k=20&m=151611999&s=612x612&w=0&h=aHGjBmGUGBTxBeHomIDBYBxd-je0ccSOfnHF9v13i2M='
                    alt='profle picture'
                    className='profile-picture'
                />
            </div>
        </nav>
    )
}

function NavMenu(){
    return(
        <div className='mobile-nav--menu'>
            <ul className='navigation-items'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Featured</a></li>
                <li><a href='#'>About Us</a></li>
            </ul>
            <input type='search' id='search' placeholder='search' />
        </div>
    )
}