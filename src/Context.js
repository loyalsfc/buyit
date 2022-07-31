import React, {useState, useEffect} from 'react'
const Context = React.createContext()

function ContextProvider(props){
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{        
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(response => setProducts(response))
            .catch(err => console.error(err));
    },[])

    function addToCart(item){
        setCart(prevItem => [...prevItem, item])
    }

    function removeFromCart(id){
        setCart(prevArray => {
            return (
                prevArray.filter(item => item.id != id)
            )
        })
    }

    console.log(cart)

    return(
        <Context.Provider value={{products, cart, addToCart, removeFromCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}