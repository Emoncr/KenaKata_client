import React from 'react'
import TopProduct from '../GlobalComponents/TopProduct'

const TopProducts = () => {
    return (
        <section className='py-10'>
            <div className="container">
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-2 gap-y-8'>
                    <TopProduct />
                    <TopProduct />
                    <TopProduct />
                    <TopProduct />
                </div>
            </div>
        </section>
    )
}

export default TopProducts