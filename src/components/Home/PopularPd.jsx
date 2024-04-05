import React from 'react'
import Product from '../GlobalComponents/Product'

const PopularPd = () => {
    return (
        <div className='py-6'>
            <div className="container">
                <div className='flex items-start md:items-center justify-between gap-y-4 gap-x-8 lg:gap-x-12  flex-col md:flex-row'>
                    <div>
                        <h2 className='font-bold font-quicksand text-xl md:text-3xl text-skin-heading'>Popular Products</h2>
                    </div>
                    <div className='flex items-center justify-start gap-5 flex-wrap'>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default PopularPd