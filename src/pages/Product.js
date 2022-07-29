import React, {useState, useEffect, useContext} from "react"
import { Context } from "../Context"
import Products from "../components/Products"
import '../assets/css/products.css'

function Product(){
    const {products} = useContext(Context)

    let items = products.map(item => {
        return(
                <Products key={item.id} prod={item} />
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