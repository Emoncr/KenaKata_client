import React from 'react'
import { Star, Plus, Minus, ShoppingCart, Heart, GitCompareArrows } from "lucide-react"
import Link from "next/link"


const ProductDetails = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 items-start gap-x-7 gap-y-4'>
            <div className='col-span-1 md:col-span-2'>
                <div className='bg-white rounded-2xl border border-solid border-border md:max-w-[420px]'>
                    <img className='w-full max-w-[420px]' src="/dummy/product-20-4-min.jpg" alt="product image" />
                </div>
            </div>
            <div className='col-span-1 md:col-span-3'>
                <div>
                    <p className='inline-block px-4 py-1.5 font-quicksand font-bold text-sm text-skin-brandDark bg-gray-200 rounded-md'>Sale</p>
                </div>
                <div className='mt-2 md:mt-5 '>
                    <h1 className='font-quicksand font-bold text-2xl md:text-xl lg:text-4xl text-skin-heading'>Organic Cage Grade A Large  Eggs</h1>
                    <div className="rating-box  mt-5">
                        <div className='flex items-center justify-start gap-0'>
                            <Star size={16} />
                            <Star size={16} />
                            <Star size={16} />
                            <Star size={16} />
                            <Star size={16} />
                            <div>
                                <Link href={"/"} className='font-lato font-semibold text-sm ml-1 text-skin-brand hover:text-skin-brandDark'>(1 reviews)</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div>
                            <p className='font-quicksand font-semibold text-lg sm:text-xl'>
                                <span className='text-skin-muted text-sm sm:text-base' ><strike>$34</strike></span>
                                <span className='text-skin-brand ml-2 font-bold'>$24</span>
                            </p>
                            <p className='mt-2 font-lato font-normal text-skin-text text-sm sm:text-base '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>

                            <p className='font-lato font-semibold text-base text-skin-warning mt-4'>26 in stock</p>
                        </div>
                        <div className='mt-3 flex items-center justify-start gap-2 sm:gap-4 lg:gap-5 '>
                            <div className='inline-flex items-center justify-between p-3 py-2 gap-3 sm:gap-6 border-2 border-solid border-skin-brand rounded-md'>
                                <button className='text-skin-brand hover:text-skin-brandDark duration-200'>
                                    <Minus size={22} strokeWidth={2} />
                                </button>
                                <p className='font-quicksand font-bold text-base sm:text-xl text-skin-heading'>1</p>
                                <button className='text-skin-brand hover:text-skin-brandDark duration-200 '>
                                    <Plus size={22} strokeWidth={2} />
                                </button>
                            </div>
                            <div>
                                <button className='py-3 px-5 font-quicksand font-bold text-white bg-skin-brand hover:bg-skin-brandDark duration-300 flex items-center justify-center gap-1 rounded-md text-sm sm:text-base'>
                                    <ShoppingCart size={20} />
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                        <div className='mt-3 flex items-center justify-start gap-2 sm:gap-4 lg:gap-5 '>
                            <div>
                                <button className='py-2.5 border-2 border-border px-5 font-quicksand font-bold text-heading hover:text-white bg-transparent hover:bg-skin-brand duration-200 flex items-center justify-center gap-1 rounded-md text-sm sm:text-base'>
                                    <GitCompareArrows size={20} />
                                    Compare
                                </button>
                            </div>
                            <div>
                                <button className='py-2.5 border-2 border-border px-5 font-quicksand font-bold text-heading hover:text-white bg-transparent hover:bg-skin-brand duration-200 flex items-center justify-center gap-1 rounded-md text-sm sm:text-base'>
                                    <Heart size={20} />
                                    WishList
                                </button>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <ul className='grid items-start grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-2'>
                                <li className='text-sm  text-skin-brandDark font-medium font-lato'><span className='text-skin-text mr-1'>Type:</span>Furit</li>
                                <li className='text-sm  text-skin-brandDark font-medium font-lato'><span className='text-skin-text mr-1'>Category:</span> Baking material, Bread and Juice</li>
                                <li className='text-sm  text-skin-brandDark font-medium font-lato'><span className='text-skin-text mr-1'>MFG:</span>11 Jan 2021</li>
                                <li className='text-sm  text-skin-brandDark font-medium font-lato'><span className='text-skin-text mr-1'>LIFE:</span> 3 Months</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails