import Header from '@/components/common/Header'
import PrivacyMain from '@/components/PrivacyPolicy.js/PrivacyMain'
import PrivacyMainMatter from '@/components/PrivacyPolicy.js/PrivacyMainMatter'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '@/components/common/Footer';
import Newsletter from '@/components/common/Newsletter';


const page = () => {
    return (
        <>
            <Header />
            <PrivacyMain />
            <PrivacyMainMatter />
            <Newsletter />
            <Footer />
        </>
    )
}

export default page

