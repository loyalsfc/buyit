import React, {useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom"
import { Context } from "../Context"
import Products from "../components/Products"
import '../assets/css/products.css'

function Product(){
    const {products} = useContext(Context)

    let items = products.map(item => {
        return(
                <Link to={`/products/${item.id}`}>
                    <Products key={item.id} img={item.image} title={item.title} price={item.price} />
                </Link>
            )
    })
    return(
        <>
        <div className="products-container">
            {items}
        </div>
        </>
    )
}

export default Product