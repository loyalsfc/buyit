import React from "react"
import {useParams} from "react-router-dom"

function ProductDetails(){
    const { productId } = useParams()
    console.log(productId)
    return(
        <div>products {productId} clicked</div>
    )
}

export default ProductDetails