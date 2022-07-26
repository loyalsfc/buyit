import React, {useState} from 'react'

export default function Products(props){
    const [isHovered, setIsHovered] = useState(false)


    console.log(isHovered)
    return(
        <div 
            className='product'
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}
        >
            <img src={props.img} />
            <h5 className='product-title'>{props.title}</h5>
            <span className='product-price'>${props.price}</span>
            {isHovered && <button className='add-to-cart-button'>Add to Cart</button>}
        </div>
    )
}