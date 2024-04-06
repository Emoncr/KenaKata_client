import React from 'react'
import SubscribeForm from '../FormComponents/SubscribeForm'

const BottomBanner = () => {
    return (
        <section className='lg:py-5'>
            <div className="max-w-[1620px] mx-auto">
                <div className='bottom_banner_bg !bg-cover bg-center bg-no-repeat py-10 px-4 lg:py-12 lg:px-24 min-h-[400px] lg:min-h-[538px] flex items-start justify-center flex-col rounded-md  md:rounded-[50px] relative'>
                    <div className='absolute right-5 bottom-0 w-[400px] sm:w-[500px] md:w-[600px] xl:w-[800px]'>
                        <img src="/images/banner-9-min.png" alt="bottom_banner" />
                    </div>
                    <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-skin-heading font-quicksand mb-4 lg:mb-8 !leading-10 lg:!leading-[72px] z-10'>Stay home & get your daily <br />needs from our shop</h1>
                    <p className='font-lato font-normal text-skin-textBody text-lg lg:text-3xl z-10'> Start Your Daily Shopping with us</p>
                    <div className='mt-10 lg:mt-14 w-full sm:max-w-lg z-10'>
                        <SubscribeForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BottomBanner