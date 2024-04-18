import React from 'react'
import NavSearch from '../FormComponents/NavSearch'
import { Heart, Recycle, ShoppingCart, UserRound } from 'lucide-react'

const MiddleHeader = () => {
  return (
    <div className='py-7 border-b border-solid border-border hidden md:block'>
      <div className="container grid grid-cols-12 items-center">
        <div className='col-span-2'>
          <img width={150} src="https://res.cloudinary.com/du6ditswt/image/upload/v1713471381/qmxvni3ihjoi4xfef9p5.png" alt="LOGO" />
        </div>
        <div className='col-span-5'>
          <NavSearch />
        </div>


        <div className='flex items-center justify-end gap-5 xl:gap-10 col-span-5'>
          <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading relative'>
            <Recycle />
            <div className='absolute -top-5 left-2 h-6 w-6 bg-skin-brandDark  rounded-full flex items-center justify-center'>
              <p className='font-quicksand font-semibold text-xs text-white'>12</p>
            </div>
            <p>Compare</p>
          </button>


          <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading relative'>
            <Heart />
            <div className='absolute -top-5 left-2 h-6 w-6 bg-skin-brandDark  rounded-full flex items-center justify-center'>
              <p className='font-quicksand font-semibold text-xs text-white'>12</p>
            </div>
            <p>WishList</p>
          </button>


          <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading relative'>
            <ShoppingCart />
            <div className='absolute -top-5 left-2 h-6 w-6 bg-skin-brandDark  rounded-full flex items-center justify-center'>
              <p className='font-quicksand font-semibold text-xs text-white'>1</p>
            </div>
            <p>Cart</p>
          </button>


          <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading relative group'>
            <UserRound />
            <p>Account</p>
            {/* <div className='absolute hidden group-hover:block  lg:p-5 bottom-0 left-0 '>
              <div className='bg-white border-border_2 shadow-lg mt-16 rounded-sm p-3'>
                <p className='text-base font-medium font-lato'>Dashboard</p>
              </div>
            </div> */}
          </button>

        </div>
      </div>
    </div>
  )
}

export default MiddleHeader

