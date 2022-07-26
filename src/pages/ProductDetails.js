import React, {useContext} from "react"
import {useParams} from "react-router-dom"
import { Context } from "../Context"
import "../assets/css/productDetails.css"

function ProductDetails(){
    const {products} = useContext(Context)
    const { productId } = useParams()
    let item = products.find(products => products.id == productId)
    console.log(item)
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
                    <button className="cart--product-detail"><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                </div>
            </div>
            <div className="description--detail-container">
                <h5>Product Description</h5>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

{
//     category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
}
export default ProductDetails