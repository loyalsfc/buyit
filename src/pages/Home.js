import React from 'react'
import Banner from '../components/Banner'
import Reason from '../components/Reasons'
import Categories from '../components/Categories'
import Featured from '../components/Featured'
import Testimonials from '../components/Testimonials'

export default function Home(){
    return (
        <>
            <Banner />
            <Reason />
            <Categories />
            <Featured />
            <Testimonials />
        </>
    )
}