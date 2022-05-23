import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Reason from './components/Reasons'
import Categories from './components/Categories'
import Featured from './components/Featured'

export default function App(){
    return (
        <>
            <Header />
            <Banner />
            <Reason />
            <Categories />
            <Featured />
        </>
    )
}