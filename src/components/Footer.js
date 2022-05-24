import React from 'react'
import Logo from '../assets/logo/buyit.png'
import '../assets/css/footer.css'

export default function Footer(){
    return(
        <div className='footer'>
            <div className='logo-in-footer'>
                <img src={Logo} alt='Buy it logo' width='50px'/>
                <span>Buy it</span>
            </div>
        </div>
    )
}