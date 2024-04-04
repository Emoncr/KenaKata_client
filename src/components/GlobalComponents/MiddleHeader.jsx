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
          <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading'>
            <Recycle />
            <p>Compare</p>
          </button>
          <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading'>
            <Heart />
            <p>WishList</p>
          </button>
          <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading'>
            <ShoppingCart />
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

