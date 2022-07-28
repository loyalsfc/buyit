import React, {useContext, useState} from 'react'
import { Context } from '../Context'
import {Link} from "react-router-dom"


export default function Products(props){
    const [isHovered, setIsHovered] = useState(false)
    const { addToCart } = useContext(Context)
 
    function handleClick(){
        // event.stopPropagation()
        addToCart(props.prod)
    }

    return(
        <div 
            className='product'
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}
        >
        <Link to={`/products/${props.id}`}>
            <img src={props.prod.image} />
            <h5 className='product-title'>{props.prod.title}</h5>
            <span className='product-price'>${props.prod.price}</span>
        </Link>
            {isHovered && <button className='add-to-cart-button' onClick={handleClick}>Add to Cart</button>}
        </div>
    )
}