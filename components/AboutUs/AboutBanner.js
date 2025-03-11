import React from 'react'

const AboutBanner = () => {
    return (
        <>
            <section class="bg-cover position-relative" style={{ background: "url(/img/bg.jpg)no-repeat" }} data-overlay="5">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-xl-7 col-lg-9 col-md-12">

                            <div class="fpc-capstion text-center my-4">
                                <div class="fpc-captions">
                                    <h1 class="xl-heading text-light">About GeoTrip & Our Mission</h1>
                                    <p class="text-light">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                                        Occasionally the first Oration against Catiline is taken for type specimens</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="fpc-banner"></div>
            </section>
        </>
    )
}

export default AboutBanner
