"use client"
import { AlignJustify, X, Recycle, Heart,ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import SiteNavbar from './SiteNavbar'
import NavSearch from '../FormComponents/NavSearch'



const NavbarMobile = () => {
    const [navExpand, setNavExpand] = useState(false);
    return (
        <div className='py-4 border-b border-solid border-border relative'>
            <div className="container px-2 2xl:px-0">
                <div className="grid grid-cols-12 items-center">
                    <div className='col-span-5 xl:col-span-4 lg:hidden'>
                        <img width={100} src="https://res.cloudinary.com/du6ditswt/image/upload/v1713471381/qmxvni3ihjoi4xfef9p5.png" alt="LOGO" />
                    </div>

                    <div className='col-span-7 xl:col-span-6 2xl:col-span-5 '>
                        {
                            navExpand ?
                                <div className='flex items-center justify-end'>
                                    <button onClick={() => setNavExpand(!navExpand)} >
                                        <X />
                                    </button>
                                </div>
                                :
                                <div className='flex items-center justify-end'>
                                    <button onClick={() => setNavExpand(!navExpand)}>
                                        <AlignJustify />
                                    </button>
                                </div>
                        }
                        {
                            navExpand &&
                            <div
                                className='absolute w-full top-16 left-0 z-50'>
                                <div className='px-6 py-4 bg-white border-2 border-t-0 border-solid border-border'>
                                    <div onClick={() => setNavExpand(!navExpand)}>
                                        <SiteNavbar />
                                    </div>
                                    <div
                                        onClick={() => setNavExpand(!navExpand)}
                                        className='mt-8 flex items-center justify-start gap-6'>
                                        <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading relative'>
                                            <ShoppingCart />
                                            <div className='absolute -top-5 left-2 h-6 w-6 bg-skin-brandDark  rounded-full flex items-center justify-center'>
                                                <p className='font-quicksand font-semibold text-xs text-white'>12</p>
                                            </div>
                                            <p>Cart</p>
                                        </button>
                                        <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading relative'>
                                            <Recycle />
                                            <div className='absolute -top-5 left-2 h-6 w-6 bg-skin-brandDark  rounded-full flex items-center justify-center'>
                                                <p className='font-quicksand font-semibold text-xs text-white'>12</p>
                                            </div>
                                            <p>Compare</p>
                                        </button>
                                        <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading relative'>
                                            <Heart />
                                            <div className='absolute -top-5 left-2 h-6 w-6 bg-skin-brandDark  rounded-full flex items-center justify-center'>
                                                <p className='font-quicksand font-semibold text-xs text-white'>12</p>
                                            </div>
                                            <p>WishList</p>
                                        </button>
                                    </div>
                                    <div
                                        className='mt-4'>
                                        <NavSearch />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMobile