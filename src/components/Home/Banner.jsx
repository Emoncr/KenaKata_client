import React from 'react'
import SubscribeForm from '../FormComponents/SubscribeForm'

const Banner = () => {
    return (
        <section className='lg:py-5'>
            <div className="max-w-[1620px] mx-auto">
                <div className='bannderBG !bg-cover bg-center bg-no-repeat py-10 px-4 lg:py-12 lg:px-24 min-h-[400px] lg:min-h-[538px] flex items-start justify-center flex-col'>
                    <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-skin-heading font-quicksand mb-4 lg:mb-10'>Don’t miss amazing <br />grocery deals</h1>
                    <p className='font-lato font-bold text-skin-textBody text-lg lg:text-3xl'>Sing up for daily newsletter</p>
                    <div className='mt-7 w-full sm:max-w-lg'>
                        <SubscribeForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner