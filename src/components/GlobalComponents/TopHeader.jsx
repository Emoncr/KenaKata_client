import React from 'react'

const TopHeader = () => {
    return (
        <div className='py-2.5 border-b border-solid border-skin-border'>
            <div className="container grid grid-cols-2">
                <div className='flex items-center justify-start gap-5'>
                    <p className='text-skin-text text-xs font-medium  font-lato'>About Us</p>
                    <p className='text-skin-text text-xs font-medium  font-lato'>My Account</p>
                </div>
                <div className='flex items-center justify-end'>
                    <p className='text-skin-text text-xs font-medium  font-lato'>
                        Need Help? Call Us
                        <span className='text-skin-brand'> +880 1883049802</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopHeader