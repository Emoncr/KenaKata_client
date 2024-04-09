"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, ArrowLeft } from "lucide-react"
import React from 'react'
import Link from "next/link"
import Product from "../GlobalComponents/Product";


const DealsSlider = () => {
    function SamplePrevArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 left-5 z-10 -translate-y-1/2 items-center justify-center cursor-pointer shadow-lg duration-300 border-2 border-skin-brand border-solid h-10  w-10 rounded-full  hover:border-skin-brandDark hidden '
                onClick={onClick}
            >
                <ArrowLeft className='text-skin-brandDark text-xl sm:text-xl ' />
            </div>
        )
    }
    function SampleNextArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 right-5 z-10  -translate-y-1/2   items-center justify-center cursor-pointer shadow-lg duration-300 border-2 border-skin-brand border-solid h-10  w-10 rounded-full  hover:border-skin-brandDark hidden '
                onClick={onClick}
            >
                <ArrowRight className='text-skin-brandDark text-xl sm:text-xl ' />
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                }
            }

        ],
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{ bottom: 35, position: 'relative', }}>
                    {dots}
                </ul>
            </div>
        ),

    };
    return (
        <>
            <Slider {...settings}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Slider>
        </>
    )
}

export default DealsSlider