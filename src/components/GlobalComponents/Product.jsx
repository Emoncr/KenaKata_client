import React from 'react'
import Link from 'next/link'
import { Star, ShoppingCart } from "lucide-react"

const Product = () => {
    return (
        <div className='bg-white border border-solid border-border rounded-2xl duration-200 hover:shadow-secondary hover:border-border_2 cursor-pointer w-full max-w-[300px] mx-auto '>
            <div className="px-6 pt-6 relative">
                <div>
                    <img className='w-full' src="/dummy/product-5-1.jpg" alt="Product Image" />
                </div>
                <div className='absolute top-0 right-0 px-3.5 py-1.5 bg-skin-brandDark text-white text-xxs font-bold font-quicksand rounded-se-2xl rounded-es-2xl flex items-center justify-center w-[60px]'>
                    New
                </div>
                <div className='absolute top-0 left-0 px-3.5 py-1.5 bg-skin-brandDark text-white text-xxs font-bold font-quicksand rounded-ss-2xl rounded-ee-2xl w-[60px] flex items-center justify-center'>
                    <span>13%</span>
                </div>
            </div>
            <div className='px-5 pb-5'>
                <p className='font-lato text-skin-grey4 text-xxs mb-1'>Fresh fruit</p>
                <h5 className='text-skin-heading font-quicksand text-base font-bold  mb-2'><Link href="#">Foster Farms Takeout Crispy Classic</Link></h5>
                <div className='flex items-center justify-start gap-0'>
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                </div>
                <div className='mt-2'>
                    <p className='text-skin-heading font-lato text-xxs font-normal '>
                        <span className='text-skin-muted mr-1'>By</span>
                        <span className='text-skin-brand'>Country Crock</span>
                    </p>
                </div>
                <div className='mt-2 flex items-center justify-between'>
                    <p className='text-skin-heading font-quicksand text-base font-bold '>
                        <span className='text-skin-brand mr-2'>$23.85</span>
                        <span className='text-skin-muted text-xxs'><strike>$10.00</strike></span>
                    </p>
                    <div>
                        <button className='px-3 py-1.5 text-skin-brandDark bg-skin-background_3 font-quicksand text-sm font-bold rounded-[4px] flex items-center justify-center gap-1'>
                            <span><ShoppingCart size={18} /></span>  Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product