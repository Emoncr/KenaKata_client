import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import DealsSlider from '../Sliders/DealsSlider'


const BestSale = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className=''>
                    <div className='flex items-start md:items-center justify-between gap-y-4 gap-x-8 lg:gap-x-12  flex-col md:flex-row w-full'>
                        <div>
                            <h2 className='font-bold font-quicksand text-xl md:text-3xl text-skin-heading'>Today Best Deals</h2>
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
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-start lg:mt-7 w-full gap-5 mt-4'>
                        <div className='col-span-12 lg:col-span-3 h-full'>
                            <Link href={"/"} className="best_deal  !bg-cover !bg-center !bg-no-repeat rounded-lg px-4 sm:px-6 md:px-5 lg:px-6 xl:px-12 min-h-[220px] md:min-h-[300px] lg:min-h-[320px] flex items-start justify-start flex-col h-full py-10">
                                <h4 className='font-bold font-quicksand text-xl md:text-3xl text-skin-heading'>Everyday fresh & <br />Clean  with Our <br />Products</h4>
                                <div className='mt-10'>
                                    <button className='!bg-skin-brand hover:!bg-skin-brandDark duration-300 px-3 py-2 text-white text-xs lg:text-sm font-bold font-quicksand flex items-center justify-between gap-1 rounded-md'>
                                        Shop Now
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </Link>
                        </div>
                        <div className='lg:col-span-9 col-span-12 '>
                            <div className='best_sale_slider'>
                                <DealsSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestSale