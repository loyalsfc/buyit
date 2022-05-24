import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Reason from './components/Reasons'
import Categories from './components/Categories'
import Featured from './components/Featured'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App(){
    return (
        <>
            <Header />
            <Banner />
            <Reason />
            <Categories />
            <Featured />
            <Testimonials />
            <Footer />
        </>
    )
}