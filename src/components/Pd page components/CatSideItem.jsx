import React from 'react'
import Link from "next/link"


const CatSideItem = () => {
    return (
        <div className='p-5 border border-border border-solid shadow-secondary rounded-2xl'>
            <div>
                <h4 className='font-bold font-quicksand text-xl md:text-2xl text-skin-heading border-b border-border pb-4'>Category</h4>
                <div className='-mt-[2px] border border-skin-brand  w-[110px]' ></div>
            </div>
            <div className='mt-5 flex items-center flex-col justify-center gap-3'>
                <Link href={"/"} className='w-full hover:shadow-sm'>
                    <div className='p-2 border-border border border-solid w-full flex items-center justify-between rounded-md'>
                        <p className='font-quicksand font-semibold text-skin-brand capitalize'>Baking Material</p>
                        <div className='w-8 h-8 rounded-full bg-skin-background_3 flex items-center justify-center'>
                            <p className='font-bold font-quicksand text-xs text-skin-brandDark'>54</p>
                        </div>
                    </div>
                </Link>
                <Link href={"/"} className='w-full hover:shadow-sm'>
                    <div className='p-2 border-border border border-solid w-full flex items-center justify-between rounded-md '>
                        <p className='font-quicksand font-semibold text-skin-brand capitalize'>Baking Material</p>
                        <div className='w-8 h-8 rounded-full bg-skin-background_3 flex items-center justify-center'>
                            <p className='font-bold font-quicksand text-xs text-skin-brandDark'>54</p>
                        </div>
                    </div>
                </Link>
                <Link href={"/"} className='w-full hover:shadow-sm'>
                    <div className='p-2 border-border border border-solid w-full flex items-center justify-between rounded-md'>
                        <p className='font-quicksand font-semibold text-skin-brand capitalize'>Baking Material</p>
                        <div className='w-8 h-8 rounded-full bg-skin-background_3 flex items-center justify-center'>
                            <p className='font-bold font-quicksand text-xs text-skin-brandDark'>54</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CatSideItem