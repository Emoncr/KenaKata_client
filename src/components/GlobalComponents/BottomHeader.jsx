import { Grid2X2, Flame, ChevronDown, Headset } from 'lucide-react'
import React from 'react'
import SiteNavbar from './SiteNavbar'

const BottomHeader = () => {
  return (
    <div className='py-4 border-b border-solid border-border'>
      <div className="container px-2 xl:px-0">
        <div className="grid grid-cols-12 items-center">
          <div className='col-span-3 xl:col-span-4 hidden lg:block'>
            <div className="grid grid-cols-12 items-center">
              <div className='xl:col-span-7 col-span-12'>
                <button className='bg-skin-brand hover:bg-skin-brandDark duration-200 xl:px-5 xl:py-3 px-3 py-2 text-white xl:text-base text-sm  font-bold font-quicksand flex items-center justify-between gap-2 rounded-md'>
                  <Grid2X2 />
                  Browse All Categories
                  <ChevronDown />
                </button>
              </div>
              <div className='xl:lex items-center justify-start xl:col-span-5 hidden'>
                <button className='bg-transparent px-1 py-3 text-skin-heading text-base font-bold font-quicksand flex items-center justify-start gap-1'>
                  <span className='text-skin-brandDark'>
                    <Flame />
                  </span>
                  Hot Deals
                </button>
              </div>
            </div>
          </div>


          <div className='col-span-7 xl:col-span-5 '>
            <SiteNavbar />
          </div>


          <div className='col-span-2 xl:col-span-3 items-center justify-end hidden lg:flex'>
            <div className='flex items-center justify-start gap-1'>
              <Headset className='h-8 w-8 xl:!h-10 xl:!w-10 text-skin-heading' />
              <div>
                <p className='font-quicksand font-bold text-skin-brand text-xl xl:text-2xl leading-none'>1900765123</p>
                <p className='font-lato font-medium  text-skin-textBody text-xs xl:text-sm leading-tight'>24/7 support center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomHeader