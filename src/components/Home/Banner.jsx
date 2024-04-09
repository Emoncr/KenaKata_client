"use client"
import React from 'react'
import SubscribeForm from '../FormComponents/SubscribeForm'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, ArrowLeft } from "lucide-react"

const Banner = () => {
    function SamplePrevArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 left-5 z-10 -translate-y-1/2 items-center justify-center cursor-pointer shadow-lg duration-300 border-2 border-skin-brand border-solid h-10  w-10 rounded-full  hover:border-skin-brandDark hidden lg:flex'
                onClick={onClick}
            >
                <ArrowLeft className='text-skin-brandDark text-xl sm:text-xl ' />
            </div>
        )
    }
    function SampleNextArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 right-5 z-10  -translate-y-1/2   items-center justify-center cursor-pointer shadow-lg duration-300 border-2 border-skin-brand border-solid h-10  w-10 rounded-full  hover:border-skin-brandDark hidden lg:flex'
                onClick={onClick}
            >
                <ArrowRight className='text-skin-brandDark text-xl sm:text-xl ' />
            </div>
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        pauseOnHover: true,
        fade: true,
        waitForAnimate: false,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 719,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
        <section className='lg:py-5'>
            <div className="max-w-[1620px] mx-auto">

                <Slider className=' mx-auto sm:max-w-full' {...settings}>
                    <div className='bannderBG !bg-cover bg-center bg-no-repeat py-10 px-4 lg:py-12 lg:px-24 min-h-[400px] lg:min-h-[538px] !flex items-start justify-center flex-col rounded-md  md:rounded-[50px]'>
                        <div>
                            <h1 className='text-4xl sm:text-6xl xl:text-5xl font-bold text-skin-heading font-quicksand mb-4 lg:mb-8  sm:!leading-[72px]'>Don’t miss amazing <br />grocery deals</h1>
                            <p className='font-lato font-normal text-skin-textBody text-lg lg:text-3xl'>Sing up for the daily newsletter</p>
                            <div className='mt-10 lg:mt-14 w-full sm:max-w-lg'>
                                <SubscribeForm />
                            </div>
                        </div>
                    </div>
                    <div className='bannderBG_2 !bg-cover bg-center bg-no-repeat py-10 px-4 lg:py-12 lg:px-24 min-h-[400px] lg:min-h-[538px] !flex items-start justify-center flex-col rounded-md  md:rounded-[50px] '>
                        <h1 className='text-4xl sm:text-6xl xl:text-5xl font-bold text-skin-heading font-quicksand mb-4 lg:mb-8  sm:!leading-[72px]'>Fresh Vegetables<br />Big discount</h1>
                        <p className='font-lato font-normal text-skin-textBody text-lg lg:text-3xl'>Save up to 50% off on your first order</p>
                        <div className='mt-10 lg:mt-14 w-full sm:max-w-lg'>
                            <SubscribeForm />
                        </div>
                    </div>
                </Slider>


            </div>
        </section>
    )
}

export default Banner