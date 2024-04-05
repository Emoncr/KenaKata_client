import React from 'react'
import Link from "next/link"
const FeaturePd = () => {
    return (
        <section className='py-4'>
            <div className="container">
                <div className='flex items-start md:items-center justify-start gap-y-4 gap-x-8 lg:gap-x-12  flex-col md:flex-row'>
                    <div>
                        <h2 className='font-bold font-quicksand text-xl md:text-3xl text-skin-heading'>Featured Categories</h2>
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


                {/* Products sections */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 gap-4 mt-6 md:mt-10'>
                    <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px] max-w-[140px] flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                        <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                        <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                        <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                    </Link>
                    <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px] max-w-[140px] flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                        <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                        <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                        <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                    </Link>
                    <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px] max-w-[140px] flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                        <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                        <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                        <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                    </Link>
                    <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px] max-w-[140px] flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                        <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                        <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                        <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                    </Link>
                    <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px] max-w-[140px] flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                        <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                        <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                        <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                    </Link>
                    <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px] max-w-[140px] flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                        <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                        <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                        <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                    </Link>
                    <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px] max-w-[140px] flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                        <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                        <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                        <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                    </Link>
                    <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px] max-w-[140px] flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                        <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                        <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                        <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                    </Link>
                    <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px] max-w-[140px] flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                        <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                        <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                        <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                    </Link>
                    <Link href={"/"} className='rounded-md bg-skin-background_1 pt-5 pb-[18px] w-full min-h-[180px] max-w-[140px] flex items-center justify-center flex-col px-2 border border-solid border-transparent hover:border-border_2 hover:shadow-secondary duration-200 group'>
                        <img className='group-hover:scale-105 duration-300' src="/dummy/cat-1.png" alt="Featere Product" />
                        <p className='mt-2 lg:mt-2 font-quicksand font-bold text-skin-heading text-base group-hover:text-skin-brand'>Vegetables</p>
                        <p className='font-lato font-normal text-skin-textBody text-base'>6 items</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FeaturePd