import AboutBanner from '@/components/AboutUs/AboutBanner'
import AboutMain from '@/components/AboutUs/AboutMain'
import Count from '@/components/common/Count'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Recentblogs from '@/components/HomeSection/Recentblogs'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <AboutBanner />
            <AboutMain />
            <Count />
            <Recentblogs />
            <Footer />
        </>
    )
}

export default page
