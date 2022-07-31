import React, {useContext} from "react"
import {useParams} from "react-router-dom"
import { Context } from "../Context"
import "../assets/css/productDetails.css"

function ProductDetails(){
    const {products, addToCart} = useContext(Context)
    const { productId } = useParams()
    let item = products.find(products => products.id == productId)
    return(
        <div className="product-detail--container">
            <div className="product-detail">
                <img className="image--product-detail" src={item.image}/>
                <div>
                    <h3 className="title--product-detail">{item.title}</h3>
                    <p className="rating--product-detail">Rating: {item.rating.rate} ({item.rating.count} verified ratings)</p>
                    <hr className="hr-rule"/>
                    <h4 className="price--product-detail">Price: ₦{item.price}
                        <p>Free shipping on all products</p>
                    </h4>
                    <hr className="hr-rule"/>
                    <button className="cart--product-detail" onClick={()=> addToCart(item)}>
                        <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
            <div className="description--detail-container">
                <h5>Product Description</h5>
                <p>{item.description}</p>
            </div>
        </div>
    )
}
export default ProductDetails