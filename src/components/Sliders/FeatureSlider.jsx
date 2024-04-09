"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, ArrowLeft } from "lucide-react"
import React from 'react'
import Link from "next/link"

const FeatureSlider = () => {
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
        slidesToShow: 10,
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
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,

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
            <Slider  {...settings}>
                <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px]   !flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                    <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                    <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                    <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                </Link>
                <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px]   !flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                    <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                    <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                    <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                </Link>
                <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px]   !flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                    <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                    <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                    <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                </Link>
                <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px]   !flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                    <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                    <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                    <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                </Link>
                <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px]   !flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                    <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                    <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                    <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                </Link>
                <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px]   !flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                    <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                    <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                    <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                </Link>
                <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px]   !flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                    <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                    <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                    <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                </Link>
                <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px]   !flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                    <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                    <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                    <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                </Link>
                <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px]   !flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                    <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                    <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                    <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                </Link>
                <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px]   !flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                    <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                    <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                    <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                </Link>
            </Slider>
        </>
    )
}

export default FeatureSlider