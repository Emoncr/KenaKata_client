import React, { useState } from 'react'
import NavSearch from '../FormComponents/NavSearch'
import { Heart, Recycle, ShoppingCart, Star, UserRound } from 'lucide-react'
import Link from "next/link"
import Cart from './Cart'
import WishListPd from './WishListPd'

const MiddleHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isWishListOpen, setIsWishListOpen] = useState(false);



  return (
    <div className='py-7 border-b border-solid border-border hidden md:block'>
      <div className="container grid grid-cols-12 items-center">
        <div className='col-span-2'>
          <img width={150} src="https://res.cloudinary.com/du6ditswt/image/upload/v1713471381/qmxvni3ihjoi4xfef9p5.png" alt="LOGO" />
        </div>
        <div className='col-span-5'>
          <NavSearch />
        </div>

        {/* Cart Items Component */}
        <Cart cartClick={{ isCartOpen, setIsCartOpen }} />

        <div className='flex items-center justify-end gap-5 xl:gap-10 col-span-5'>
          <button className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading relative'>
            <Recycle />
            <div className='absolute -top-5 left-2 h-6 w-6 bg-skin-brandDark  rounded-full flex items-center justify-center'>
              <p className='font-quicksand font-semibold text-xs text-white'>1</p>
            </div>
            <p>Compare</p>
          </button>


          <button
            onClick={() => setIsWishListOpen(!isWishListOpen)}
            className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading relative'>
            <Heart />
            <div className='absolute -top-5 left-2 h-6 w-6 bg-skin-brandDark  rounded-full flex items-center justify-center'>
              <p className='font-quicksand font-semibold text-xs text-white'>1</p>
            </div>
            <p>WishList</p>
            {
              isWishListOpen &&
              <div className='absolute    -top-10 -right-8 w-[300px] rounded-md py-2 '>
                <div className='bg-white border-border_2 shadow-lg mt-16 p-2 rounded-sm flex items-start justify-start gap-2 flex-col'>
                  <WishListPd />
                  <WishListPd />
                  <WishListPd />
                  <WishListPd />
                </div>
              </div>
            }
          </button>


          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading relative'>
            <ShoppingCart />
            <div className='absolute -top-5 left-2 h-6 w-6 bg-skin-brandDark  rounded-full flex items-center justify-center'>
              <p className='font-quicksand font-semibold text-xs text-white'>1</p>
            </div>
            <p>Cart</p>
          </button>


          <button
            onClick={() => setIsUserOpen(!isUserOpen)}
            className='flex items-center gap-1 text-skin-textBody font-lato font-semibold text-sm duration-300 hover:text-skin-heading relative'>
            <UserRound />
            <p>Account</p>
            {
              isUserOpen &&
              <div className='absolute    -top-10 -right-8 w-[200px] rounded-md py-2 '>
                <div className='bg-white border-border_2 shadow-lg mt-16 p-2 rounded-sm flex items-start justify-start gap-1 flex-col'>
                  <Link href={"/"} className="font-medium font-quicksand hover:bg-skin-brand bg-transparent transition-all duration-200 text-skin-heading hover:text-white px-3 py-2 rounded-sm w-full text-left text-base ">
                    Dashboard
                  </Link>
                  <Link href={"/"} className="font-medium font-quicksand hover:bg-skin-brand bg-transparent transition-all duration-200 text-skin-heading hover:text-white px-3 py-2 rounded-sm w-full text-left text-base ">
                    Profile
                  </Link>
                  <Link href={"/"} className="font-medium font-quicksand hover:bg-skin-brand bg-transparent transition-all duration-200 text-skin-heading hover:text-white px-3 py-2 rounded-sm w-full text-left text-base ">
                    Login
                  </Link>
                </div>
              </div>
            }
          </button>

        </div>
      </div>
    </div>
  )
}

export default MiddleHeader

