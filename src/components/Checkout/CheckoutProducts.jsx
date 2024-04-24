import React from 'react'
import CartProduct from '../GlobalComponents/CartPd'
import CheckoutForm from '../FormComponents/CheckoutForm'

const CheckoutProducts = () => {
    return (
        <section className='py-7 lg:py-7'>
            <div className="max-w-[1240px] mx-auto px-5">
                <h2 className='text-2xl font-bold text-skin-heading font-quicksand'>Single step with order summary</h2>
                <div className='mt-5 grid grid-cols-1 md:grid-cols-5 items-start gap-2 sm:gap-4 lg:gap-8 p-2 sm:p-3 lg:p-5 rounded-md border border-solid border-border_3 bg-skin-background_4'>
                    <div className='md:col-span-3 order-last md:order-1'>
                        <CheckoutForm />
                    </div>
                    <div className='md:col-span-2 md:order-last'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 items-start justify-start gap-5 py-5'>
                            <CartProduct />
                            <CartProduct />
                            <CartProduct />
                            <CartProduct />
                            <CartProduct />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutProducts