import React from 'react'
import Subtotal from '../GlobalComponents/SubtotalComp'

const CheckoutForm = () => {
    return (
        <section className='py-5'>
            <div className='px-2'>
                <form>
                    <div>
                        <p className="text-skin-heading font-bold font-quicksand text-xl flex items-start justify-start flex-col gap-2"> Contact Info</p>
                        <div className='mt-2'>
                            <label className=' font-semibold font-quicksand text-sm text-skin-secondary'>
                                Your Name*
                                <input className='w-full bg-white font-lato text-skin-secondary p-2 px-4 border border-solid border-border_3 rounded-md placeholder:font-lato placeholder:text-sm placeholder:font-medium focus:outline-skin-brand' placeholder='Biplob Hasan Emon' type="text" />
                            </label>
                        </div>
                        <div className='mt-2'>
                            <label className=' font-semibold font-quicksand text-sm text-skin-secondary'>
                                Email*
                                <input className='w-full bg-white font-lato text-skin-secondary p-2 px-4 border border-solid border-border_3 rounded-md placeholder:font-lato placeholder:text-sm placeholder:font-medium focus:outline-skin-brand' placeholder='exmp@example.com' type="email" />
                            </label>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div>
                            <label className=' font-semibold font-quicksand text-sm text-skin-secondary'>
                                Address*
                                <input className='w-full bg-white font-lato text-skin-secondary p-2 px-4 border border-solid border-border_3 rounded-md placeholder:font-lato placeholder:text-sm placeholder:font-medium focus:outline-skin-brand' placeholder='Enter Your Address' type="text" />
                            </label>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div>
                            <label className=' font-semibold font-quicksand text-sm text-skin-secondary'>
                                Phone Number*
                                <input className='w-full bg-white font-lato text-skin-secondary p-2 px-4 border border-solid border-border_3 rounded-md placeholder:font-lato placeholder:text-sm placeholder:font-medium focus:outline-skin-brand' placeholder='Ex: +880 1883049802' type="text" />
                            </label>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4'>
                            <div className='sm:col-span-5'>
                                <label className=' font-semibold font-quicksand text-sm text-skin-secondary'>
                                    City*
                                    <input className='w-full bg-white font-lato text-skin-secondary p-2 px-4 border border-solid border-border_3 rounded-md placeholder:font-lato placeholder:text-sm placeholder:font-medium focus:outline-skin-brand' placeholder='Ex: San Francisco' type="text" />
                                </label>
                            </div>
                            <div className='sm:col-span-4'>
                                <label className=' font-semibold font-quicksand text-sm text-skin-secondary'>
                                    State*
                                    <input className='w-full bg-white font-lato text-skin-secondary p-2 px-4 border border-solid border-border_3 rounded-md placeholder:font-lato placeholder:text-sm placeholder:font-medium focus:outline-skin-brand' placeholder='Ex: California' type="text" />
                                </label>
                            </div>
                            <div className='sm:col-span-3'>
                                <label className=' font-semibold font-quicksand text-sm text-skin-secondary'>
                                    Zip*
                                    <input className='w-full bg-white font-lato text-skin-secondary p-2 px-4 border border-solid border-border_3 rounded-md placeholder:font-lato placeholder:text-sm placeholder:font-medium focus:outline-skin-brand' placeholder='Ex: 12345' type="text" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div>
                            <label className=' font-semibold font-quicksand text-sm text-skin-secondary'>
                                Country*
                                <input className='w-full bg-white font-lato text-skin-secondary p-2 px-4 border border-solid border-border_3 rounded-md placeholder:font-lato placeholder:text-sm placeholder:font-medium focus:outline-skin-brand' placeholder='Ex: United States' type="text" />
                            </label>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <Subtotal />
                    </div>
                    <div>
                        <button className='w-full mt-4 bg-skin-brand hover:bg-skin-brandDark transition-all text-white font-bold font-quicksand py-2 text-xl duration-300 rounded-md' type='submit'>
                            Place Your Order
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CheckoutForm