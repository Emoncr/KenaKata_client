import React from 'react'

const SubscribeForm = () => {
    return (
        <form className='relative'>
            <input type="text" placeholder="Enter your email" className="px-5 lg:px-8 py-4 font-quicksand font-medium w-full border-2 rounded-full border-solid !border-border_2 focus:outline-skin-brandDark placeholder:text-skin-textBody text-base placeholder:text-base" />

            <button className='bg-skin-brand absolute right-[2px] top-1/2 -translate-y-1/2 px-8 lg:px-12 py-[18px] font-quicksand font-semibold text-sm text-white rounded-full tracking-wider hover:bg-skin-brandDark duration-300'>
                Subscribe
            </button>
        </form>
    )
}

export default SubscribeForm