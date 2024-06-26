import React from 'react'
import Product from '../GlobalComponents/Product'
import Link from 'next/link'


const PopularPd = () => {
    return (
        <div className='py-6'>
            <div className="container">
                <div className='flex items-start md:items-center justify-between gap-y-4 gap-x-8 lg:gap-x-12  flex-col md:flex-row'>
                    <div>
                        <h2 className='font-bold font-quicksand text-xl md:text-3xl text-skin-heading'>Popular Products</h2>
                    </div>
                    <div className='flex items-center justify-start gap-5 flex-wrap'>
                        <Link href={"/"} className='text-sm md:text-base font-quicksand font-bold text-skin-heading hover:-translate-y-1 duration-500 hover:text-skin-brandDark'>Milk</Link>
                        <Link href={"/"} className='text-sm md:text-base font-quicksand font-bold text-skin-heading hover:-translate-y-1 duration-500 hover:text-skin-brandDark'>Milk</Link>
                        <Link href={"/"} className='text-sm md:text-base font-quicksand font-bold text-skin-heading hover:-translate-y-1 duration-500 hover:text-skin-brandDark'>Milk</Link>
                        <Link href={"/"} className='text-sm md:text-base font-quicksand font-bold text-skin-heading hover:-translate-y-1 duration-500 hover:text-skin-brandDark'>Milk</Link>
                        <Link href={"/"} className='text-sm md:text-base font-quicksand font-bold text-skin-heading hover:-translate-y-1 duration-500 hover:text-skin-brandDark'>Milk</Link>
                        <Link href={"/"} className='text-sm md:text-base font-quicksand font-bold text-skin-heading hover:-translate-y-1 duration-500 hover:text-skin-brandDark'>Milk</Link>
                  
                    </div>
                </div>
                <div className='mt-4 lg:mt-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8'>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularPd