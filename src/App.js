import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import {Routes, Route} from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails'


export default function App(){
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/products' element={<Product />}/>
                <Route path='/products/:productId' element={<ProductDetails />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}