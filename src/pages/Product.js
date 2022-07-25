import React, {useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom"
import Header from "../components/Header"
import Products from "../components/Products"

function Product(){
    const [products, setProducts] = useState([])

    useEffect(()=>{        
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(response => setProducts(response))
            .catch(err => console.error(err));
    },[])

    console.log(products)
    let items = products.map(item => {
        return(
                <Link to={`/products/${item.id}`}>
                    <Products key={item.id} img={item.image} title={item.title} price={item.price} />
                </Link>
            )
    })
    return(
        <>
        <Header />
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {items}
        </div>
        </>
    )
}

export default Product