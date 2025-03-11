"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => (
  <button
    className="slick-prev flickity-prev-next-button previous"
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
  <button
    className="slick-next flickity-prev-next-button next"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);

const Topdestination = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />, // Add Left Arrow
    nextArrow: <NextArrow />, // Add Right Arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-3">
            <div className="col-8">
              <div className="upside-heading">
                <h5 className="fw-bold fs-6 m-0">Explore Top Destinations</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="text-end grpx-btn">
                <a href="#" className="btn btn-light-primary btn-md fw-medium">
                  More<i className="fa-solid fa-arrow-trend-up ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 p-0 position-relative">
              <Slider {...settings} className="main-carousel cols-4 dots-full">
                {[
                  { city: "San Jose", img: "/img/city/c-8.png" },
                  { city: "Houston", img: "/img/city/c-7.png" },
                  { city: "San Francisco", img: "/img/city/c-6.png" },
                  { city: "San Diego", img: "/img/city/c-4.png" },
                  { city: "Los Angeles", img: "/img/city/ct-12.png" },
                  { city: "New Orleans", img: "/img/city/ct-9.png" },
                ].map((item, index) => (
                  <div className="carousel-cell" key={index}>
                    <div className="cardCities cursor rounded-2">
                      <div className="cardCities-image ratio ratio-4">
                        <img
                          src={item.img}
                          className="img-fluid object-fit"
                          alt={item.city}
                        />
                      </div>
                      <div className="citiesCard-content d-flex flex-column justify-content-between text-center px-4 py-4">
                        <div className="cardCities-bg"></div>
                        <div className="citiesCard-topcaps">
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            {[
                              "10 Hotels",
                              "25 Flights",
                              "17 Cars",
                              "22 Tours",
                              "36 Activities",
                            ].map((text, idx) => (
                              <div
                                key={idx}
                                className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1"
                              >
                                {text}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="citiesCard-bottomcaps">
                          <h4 className="text-light fs-3 mb-3">{item.city}</h4>
                          <button className="btn btn-whitener full-width fw-medium">
                            Discover{" "}
                            <i className="fa-solid fa-arrow-trend-up ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topdestination;
