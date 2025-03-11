import React from 'react'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import BannerSection from '@/components/ContactUs/BannerSection'
import "bootstrap/dist/css/bootstrap.min.css";
import FormSection from '@/components/ContactUs/FormSection';
import Newsletter from '@/components/common/Newsletter';

const page = () => {
    return (
        <>
            <Header />
            <BannerSection />
            <FormSection />
            <Newsletter />
            <Footer />
        </>
    )
}

export default page
