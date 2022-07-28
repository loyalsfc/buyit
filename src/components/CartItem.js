import React from "react";

function CartItem(props){
    return(
        <tr>
            <td className="product-image">
                <img src={props.img} />
                <div className="product-image-title">
                    <p>{props.title}</p>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </td>
            <td>
                <input type="number" id={`item${props.id}`} name={`item${props.id}`}  className="item-number"/> 
            </td>
            <td>{props.price}</td>
            <td>₦{200}</td>
        </tr>
    )
}

export default CartItem