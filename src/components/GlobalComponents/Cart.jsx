
import React from 'react'
import CartProduct from './CartPd';
import { X } from 'lucide-react';

const Cart = ({ cartClick }) => {
    const { isCartOpen, setIsCartOpen } = cartClick;


    return (
        <div
            onClick={() => setIsCartOpen(!isCartOpen)}
            className={`absolute bg-skin-brandDarkLite z-50 right-0 top-0 ${isCartOpen ? 'w-full' : 'w-0'}  transition-all overflow-hidden flex justify-end duration-500 h-full min-h-screen max-h-full`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`custom_scrollbar bg-white overflow-hidden w-full max-w-md ${isCartOpen ? "blcok" : "hidden"} overflow-y-scroll  transition-all duration-500  mr-0 ml-0 drop-shadow-lg shadow-lg z-50`}>
                <div className='p-5'>
                    <div className='flex items-center justify-between '>
                        <h4 className='font-bold font-quicksand text-xl text-skin-heading'>Your cart products</h4>
                        <button
                            onClick={() => setIsCartOpen(!isCartOpen)}
                            className='hover:text-skin-brandDark transition-all'>
                            <X />
                        </button>
                    </div>
                    <div className='mt-5 grid gap-4'>
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                    </div>
                    <div className='mt-4'>
                        <div>
                            <p className='text-2xl text-skin-heading font-bold'>Total $600</p>
                        </div>
                        <button className='w-full bg-skin-brand text-white font-bold font-quicksand text-lg py-2 mt-5'>Checkout Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart