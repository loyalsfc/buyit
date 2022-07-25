import React, {useState} from 'react'

export default function Products(props){
    const [isHovered, setIsHovered] = useState(false)


    console.log(isHovered)
    return(
        <div 
            style={
                {display: "flex", 
                flexDirection: "column", 
                width:"200px",
                height:"300px", 
                color:"black"}
            }
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}
        >
            <img src={props.img} height={150} width={100} />
            <h4>{props.title}</h4>
            <span>${props.price}</span>
            {isHovered && <button>Add to Cart</button>}
        </div>
    )
}