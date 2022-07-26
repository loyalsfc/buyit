import React from "react";
import '../assets/css/reasons.css'

export default function Reason(){
    return(
        <div className="container">
            <h3 className="reason-title">WHY SHOP BUYIT</h3>
            <div className='wrapper'>
                <Why 
                    icon='truck'
                    title="QUICK DELIVRY" 
                    body='Get your items shipped to you within minutes' 
                />
                <Why 
                    icon='money-check-dollar'
                    title="SECURED PAYMENT" 
                    body='All mode of payment are safe and trusted.' 
                />
                <Why
                    icon='circle-check' 
                    title="AUTHENTICITY GUARANTEED" 
                    body='Products sold at buyit are 100% original' 
                />
            </div>
        </div>
    )
}

function Why(props){
    return(
    <div>
        <div className='imageContainer'>
            <i className={`fa-solid fa-${props.icon}`}></i>
        </div>
        <h4>{props.title}</h4>
        <p>{props.body}</p>
    </div>
    )
}