import React from 'react'

const Amenities = () => {
    return (
        <section className='py-6 '>
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-3">
                <div className='p-5 rounded-xl bg-skin-background_2 gap-3 flex items-center justify-start'>
                    <img className='w-[50px]' src="/icons/icon-1.png" alt="Amenitis Image" />
                    <div>
                        <h6 className='font-quicksand font-bold text-lg text-skin-heading'>Best prices & offers</h6>
                        <p className='text-skin-grey4 font-lato font-semibold text-sm mt-1'>Orders $50 or more</p>
                    </div>
                </div>
                <div className='p-5 rounded-xl bg-skin-background_2 gap-3 flex items-center justify-start'>
                    <img className='w-[50px]' src="/icons/icon-2.png" alt="Amenitis Image" />
                    <div>
                        <h6 className='font-quicksand font-bold text-lg text-skin-heading'>Free delivery</h6>
                        <p className='text-skin-grey4 font-lato font-semibold text-sm mt-1'>24/7 amazing services</p>
                    </div>
                </div>
                <div className='p-5 rounded-xl bg-skin-background_2 gap-3 flex items-center justify-start'>
                    <img className='w-[50px]' src="/icons/icon-3.png" alt="Amenitis Image" />
                    <div>
                        <h6 className='font-quicksand font-bold text-lg text-skin-heading'>Great daily deal</h6>
                        <p className='text-skin-grey4 font-lato font-semibold text-sm mt-1'>When you sign up</p>
                    </div>
                </div>
                <div className='p-5 rounded-xl bg-skin-background_2 gap-3 flex items-center justify-start'>
                    <img className='w-[50px]' src="/icons/icon-4.png" alt="Amenitis Image" />
                    <div>
                        <h6 className='font-quicksand font-bold text-lg text-skin-heading'>Wide assortment</h6>
                        <p className='text-skin-grey4 font-lato font-semibold text-sm mt-1'>Mega Discounts</p>
                    </div>
                </div>
                <div className='p-5 rounded-xl bg-skin-background_2 gap-3 flex items-center justify-start'>
                    <img className='w-[50px]' src="/icons/icon-5.png" alt="Amenitis Image" />
                    <div>
                        <h6 className='font-quicksand font-bold text-lg text-skin-heading'>Easy returns</h6>
                        <p className='text-skin-grey4 font-lato font-semibold text-sm mt-1'>Within 30 days</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Amenities