import React from 'react'
import Link from "next/link"
import { Star } from 'lucide-react'




const WishListPd = () => {
    return (
        <Link href={"/"} className="font-medium font-quicksand bg-transparent transition-all text-skin-heading  px-3 py-2 rounded-sm w-full text-left text-base ">
            <div className='grid grid-cols-5 items-center justify-start gap-2 group'>
                <div className='col-span-1'>
                    <img src="/dummy/product-10-1.jpg" alt="product" />
                </div>
                <div className='col-span-4'>
                    <h5 className='font-semibold font-quicksand text-base text-skin-heading group-hover:text-skin-brand truncate transition-all duration-300'>Product name 2</h5>
                    <div className="rating-box">
                        <div className='flex items-center justify-start gap-0'>
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <div>
                                <Link href={"/"} className='font-lato font-semibold text-sm ml-1 text-skin-brand hover:text-skin-brandDark'>(1)</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default WishListPd