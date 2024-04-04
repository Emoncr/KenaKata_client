import React from 'react'

const NavSearch = () => {
    return (

        <>
            <form className='relative'>
                <input type="text" placeholder="Search products..." className=" px-3 py-3 font-quicksand font-medium w-full border-2 rounded-md border-solid !border-border_2 focus:outline-skin-brandDark placeholder:text-skin-textBody placeholder:text-xs" />

                <button className='bg-skin-brand absolute right-1.5 top-1/2 -translate-y-1/2 px-5 py-2.5 font-quicksand font-semibold text-sm text-white rounded-md tracking-wider hover:bg-skin-brand2 duration-300'>
                    Search
                </button>
            </form>
        </>
    )
}

export default NavSearch