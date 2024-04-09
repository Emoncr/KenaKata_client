import React from 'react'
import NavSearch from '../FormComponents/NavSearch'
import { Heart, Recycle, ShoppingCart, UserRound } from 'lucide-react'

const MiddleHeader = () => {
  return (
    <div className='py-7 border-b border-solid border-border hidden md:block'>
      <div className="container grid grid-cols-12 items-center">
        <div className='col-span-2'>
          <img width={150} src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/logo.png" alt="LOGO" />
        </div>
        <div className='col-span-5'>
          <NavSearch />
        </div>
        <div className='flex items-center justify-end gap-10 col-span-5'>
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
          <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading'>
            <UserRound />
            <p>Account</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MiddleHeader

