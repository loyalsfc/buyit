import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import {Routes, Route} from "react-router-dom"

export default function App(){
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                    
                <Route path='/products' element={<Product />}/>
            </Routes>
        </div>
    )
}