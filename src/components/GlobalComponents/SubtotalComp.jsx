import React from 'react'

const Subtotal = () => {
    return (
        <div className='mt-4'>
            <div>
                <ul>
                    <li className='flex items-center justify-between gap-1 px-4'>
                        <p className='text-xl text-skin-heading font-medium'>Tax</p>
                        <p className='text-xl text-skin-heading font-medium'>$10</p>
                    </li>
                    <li className='flex items-center justify-between gap-1 px-4'>
                        <p className='text-2xl text-skin-heading font-bold'>Total</p>
                        <p className='text-2xl text-skin-heading font-bold'>$60</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Subtotal