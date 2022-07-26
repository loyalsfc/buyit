import React, {useState, useEffect} from 'react'
const Context = React.createContext()


function ContextProvider(props){
    const [products, setProducts] = useState([])

    useEffect(()=>{        
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(response => setProducts(response))
            .catch(err => console.error(err));
    },[])

    console.log(products)

    return(
        <Context.Provider value={{products}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}