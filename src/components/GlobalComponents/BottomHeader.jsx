import { Grid2X2, Flame, ChevronDown, Headset } from 'lucide-react'
import React from 'react'
import SiteNavbar from './SiteNavbar'

const BottomHeader = () => {
  return (
    <div className='py-4 border-b border-solid border-border'>
      <div className="container">
        <div className="grid grid-cols-12 items-center">


          <div className='col-span-4 hidden md:block'>
            <div className="grid grid-cols-12 items-center">
              <div className='col-span-7'>
                <button className='bg-skin-brand hover:bg-skin-brandDark duration-200 px-5 py-3 text-white text-base font-bold font-quicksand flex items-center justify-between gap-2 rounded-md'>
                  <Grid2X2 />
                  Browse All Categories
                  <ChevronDown />
                </button>
              </div>
              <div className='flex items-center justify-start col-span-5'>
                <button className='bg-transparent px-1 py-3 text-skin-heading text-base font-bold font-quicksand flex items-center justify-start gap-1'>
                  <span className='text-skin-brandDark'>
                    <Flame />
                  </span>
                  Hot Deals
                </button>
              </div>
            </div>
          </div>


          <div className='col-span-5 '>
            <SiteNavbar />
          </div>


          <div className='col-span-3 flex items-center justify-end'>
            <div className='flex items-center justify-start gap-1'>
              <Headset className='!h-10 !w-10 text-skin-heading' />
              <div>
                <p className='font-quicksand font-bold text-skin-brand text-2xl leading-none'>1900765123</p>
                <p className='font-lato font-medium  text-skin-textBody text-sm leading-tight'>24/7 support center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomHeader