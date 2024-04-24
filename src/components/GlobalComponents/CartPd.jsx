import { Minus, Plus, Star, X } from 'lucide-react'
import React from 'react'
import Link from "next/link"


const CartProduct = () => {
  return (

    <div className='grid grid-cols-6 items-center gap-1 max-w-md sm:ml-0 sm:mr-0 mx-auto'>

      <div className='col-span-2 relative'>
        <Link href={"/"}>
          <div >
            <img className='' src="/dummy/product-10-1.jpg" alt="Product image" />
          </div>
        </Link>
        <div className="absolute top-0 left-0 bg-red-600 w-6 h-6 rounded-sm flex items-center justify-center ">
          <button className='text-white '>
            <X size={20} />
          </button>
        </div>
      </div>


      <div className="col-span-4">
        <Link href={"/"} className='hover:underline transition-all'>
          <h4 className='text-lg font-bold font-quicksand truncate text-skin-heading '>Product name</h4>
        </Link>
        <div className="rating-box  ">
          <div className='flex items-center justify-start gap-0'>
            <Star size={13} />
            <Star size={13} />
            <Star size={13} />
            <Star size={13} />
            <Star size={13} />
            <div>
              <Link href={"/"} className='font-lato font-semibold text-sm ml-1 text-skin-brand hover:text-skin-brandDark'>(1)</Link>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between gap-1 mt-1 pr-5'>
          <p className='text-sm text-skin-textBody font-medium  font-lato'>Quantity: 5</p>
          <p className='text-xl text-skin-brand font-bold  font-quicksand'>$60</p>
        </div>
        <div className='inline-flex items-center justify-between p-2 py-1 gap-2 sm:gap-4 border-2 border-solid border-skin-brand rounded-md mt-2'>
          <button className='text-skin-brand hover:text-skin-brandDark duration-200'>
            <Minus size={16} strokeWidth={2} />
          </button>
          <p className='font-quicksand font-bold text-sm sm:text-sm text-skin-heading'>1</p>
          <button className='text-skin-brand hover:text-skin-brandDark duration-200 '>
            <Plus size={16} strokeWidth={2} />
          </button>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct