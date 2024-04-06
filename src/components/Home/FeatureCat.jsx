import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
const FeatureCat = () => {
    return (
        <section className='py-4'>
            <div className="container grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <Link href={"/"} className="feature_bg1 !bg-cover !bg-center !bg-no-repeat rounded-lg px-4 sm:px-6 md:px-5 lg:px-6 xl:px-12 min-h-[220px] md:min-h-[300px] lg:min-h-[320px] flex items-start justify-center flex-col">
                    <h4 className='font-bold font-quicksand text-xl md:text-3xl text-skin-heading'>Everyday fresh & <br />Clean  with Our <br />Products</h4>
                    <div className='mt-4 md:mt-6 '>
                        <button className='!bg-skin-brand hover:!bg-skin-brandDark duration-300 px-3 py-2 text-white text-xs lg:text-sm font-bold font-quicksand flex items-center justify-between gap-1 rounded-md'>
                            Shop Now
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </Link>
                <Link href={"/"} className="feature_bg2 !bg-cover !bg-center !bg-no-repeat rounded-lg px-4 sm:px-6 md:px-5 lg:px-6 xl:px-12 min-h-[220px] md:min-h-[300px] lg:min-h-[320px] flex items-start justify-center flex-col">
                    <h4 className='font-bold font-quicksand text-xl md:text-3xl text-skin-heading'>Everyday fresh & <br />Clean  with Our <br />Products</h4>
                    <div className='mt-4 md:mt-6 '>
                        <button className='!bg-skin-brand hover:!bg-skin-brandDark duration-300 px-3 py-2 text-white text-xs lg:text-sm font-bold font-quicksand flex items-center justify-between gap-1 rounded-md'>
                            Shop Now
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </Link>
                <Link href={"/"} className="feature_bg3 !bg-cover !bg-center !bg-no-repeat rounded-lg px-4 sm:px-6 md:px-5 lg:px-6 xl:px-12 min-h-[220px] md:min-h-[300px] lg:min-h-[320px] flex items-start justify-center flex-col">
                    <h4 className='font-bold font-quicksand text-xl md:text-3xl text-skin-heading'>Everyday fresh & <br />Clean  with Our <br />Products</h4>
                    <div className='mt-4 md:mt-6 '>
                        <button className='!bg-skin-brand hover:!bg-skin-brandDark duration-300 px-3 py-2 text-white text-xs lg:text-sm font-bold font-quicksand flex items-center justify-between gap-1 rounded-md'>
                            Shop Now
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default FeatureCat