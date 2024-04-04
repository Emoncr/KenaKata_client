import Link from 'next/link'
import React from 'react'

const TopHeader = () => {
    return (
        <div className='py-2.5 border-b border-solid border-skin-border hidden lg:block'>
            <div className="container grid grid-cols-2">
                <div className='flex items-center justify-start gap-3'>
                    <p className='text-skin-text text-xs font-medium font-lato'>
                        <Link href={"/"}>
                            About Us
                        </Link>
                    </p>
                    <p className='text-skin-text text-xs font-medium font-lato'>
                        <Link href={"/"}>
                            My Account
                        </Link>
                    </p>
                    <p className='text-skin-text text-xs font-medium font-lato'>
                        <Link href={"/"}>
                            Track Order
                        </Link>
                    </p>
                </div>
                <div className='flex items-center justify-end'>
                    <p className='text-skin-text text-xs font-medium font-lato'>
                        Need Help? Call Us
                        <Link href={"/"} className='text-skin-brand'> +880 1883049802</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopHeader