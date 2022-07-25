import React from 'react'

export default function Products(props){
    return(
        <div style={{display: "flex", flexDirection: "column", width:"200px",height:"300px"}}>
            <img src={props.img} height={150} width={100} />
            <h4>{props.title}</h4>
            <span>{props.price}</span>
        </div>
    )
}