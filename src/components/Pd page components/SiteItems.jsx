import React from 'react'
import CatSideItem from './CatSideItem'
import TopProduct from '../GlobalComponents/TopProduct'

const SiteItems = () => {
    return (
        <>
            <CatSideItem />
            <div className='p-5 border border-border border-solid shadow-secondary rounded-2xl mt-5 lg:mt-10'>
                <TopProduct />
            </div>
        </>
    )
}

export default SiteItems