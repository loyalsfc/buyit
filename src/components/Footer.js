import React from 'react'
import Logo from '../assets/logo/buyit.png'
import '../assets/css/footer.css'

export default function Footer(){
    return(
        <>
            <div className='footer'>
                <div className='logo-in-footer'>
                    <img src={Logo} alt='Buy it logo' width='50px'/>
                    <span>Buy it</span>
                </div>
                <div className='footer-item--container'>
                    <ContactUs />
                    <FooterItem 
                        header = 'COMPANY'
                        firstItem = 'Products'
                        secondItem = 'Features'
                        thirdItem = 'About Us'
                    />
                    <FooterItem 
                        header = 'QUICK LINKS'
                        firstItem = 'FAQ'
                        secondItem = 'Privacy Policy'
                        thirdItem = 'Terms & Condition'
                    />
                    <Subscribe />
                </div>
            </div>
            <div className='copywright'>
                2022 buyit, All rights reserved
            </div>
        </>
    )
}

function ContactUs(){
    return (
    <div className='footer-item--wrapper'>
        <h5 className='footer-item--header'>CONTACT US</h5>
        <ul className='footer-item--items'>
            <li>68, Ajilosun, Ado-Ikere road, <br/>Ado-Ekiti, Nigeria</li>
            <li><i class="fa-solid fa-phone"></i> (+234)810 412 3410 </li>
            <li><i class="fa-solid fa-envelope"></i> info@buyit.com.ng</li>
        </ul>
    </div>
    )
}
function FooterItem(props){
    return (
    <div className='footer-item--wrapper'>
        <h5 className='footer-item--header'>{props.header}</h5>
        <ul className='footer-item--items'>
            <li>{props.firstItem}</li>
            <li>{props.secondItem}</li>
            <li>{props.thirdItem}</li>
        </ul>
    </div>
    )
}

function Subscribe(){
    return (
        <div className='footer-item--wrapper'>
            <h5 className='footer-item--header'>SUBCRIBE TO OUR NEWS LETTER</h5>
            <div className='subscribe-box'>
                <input type='email' id='email' placeholder='   Enter your email here' />
                <button>SUBCRIBE</button>
            </div>
            <div className='social-icons'>
                <i class="fa-brands fa-facebook-square"></i>
                <i class="fa-brands fa-instagram-square"></i>
                <i class="fa-brands fa-twitter-square"></i>
            </div>
        </div>
    )
}