import React from 'react'
import Product from '../GlobalComponents/Product'
import { Search } from "lucide-react"
const AllProducts = () => {
    return (
        <section className='py-16'>
            <div className="container">
                <div className='grid grid-cols-12 items-start gap-5 sm:gap-7 xl:gap-10'>
                    <div className='col-span-3'>
                        <div className='p-5 border border-border border-solid shadow-secondary rounded-2xl'>
                            <div>
                                <h4 className='font-bold font-quicksand text-xl md:text-2xl text-skin-heading border-b border-border pb-4'>Filer Products</h4>
                                <div className='-mt-[2px] border border-skin-brand  w-[160px]' ></div>
                            </div>
                            <div className='mt-5'>
                                <div>
                                    <form className='relative'>
                                        <input type="text" placeholder="Search products..." className=" px-3 py-3 font-quicksand font-medium w-full border-2 rounded-md border-solid !border-border_2 focus:outline-skin-brandDark placeholder:text-skin-textBody placeholder:text-xs" />

                                        <button className='bg-skin-brand absolute right-1.5 top-1/2 -translate-y-1/2 px-5 py-2.5 font-quicksand font-semibold text-sm text-white rounded-md tracking-wider hover:bg-skin-brand2 duration-300'>
                                            <Search />
                                        </button>
                                    </form>
                                </div>
                                <div className='mt-3'>
                                    <h5 className='text-sm font-quicksand font-semibold text-skin-heading mb-2'>Sort Products</h5>
                                    <div className="relative">
                                        <select className="p-2 px-3 w-full border border-solid border-gray-300 appearance-none focus:outline-skin-brand rounded-md font-medium font-quicksand group">
                                            <option value="a">A</option>
                                        </select>
                                        <p className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-skin-brand">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </p>
                                    </div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid col-span-9 items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8'>
                        <Product />
                        <Product />
                        <Product />
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
        </section>
    )
}

export default AllProducts