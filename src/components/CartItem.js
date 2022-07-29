import React from "react";

function CartItem(props){
    return(
        <div className="product-content-wrapper">
            <div className="product-image">
                <img src={props.img} />
                <div className="product-image-title">
                    <p>{props.title}</p>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </div>
            <div>
                <input type="number" id={`item${props.id}`} name={`item${props.id}`}  className="item-number"/> 
            </div>
            <div>₦{props.price}</div>
            <div>₦{200}</div>
        </div>
    )
}

export default CartItem