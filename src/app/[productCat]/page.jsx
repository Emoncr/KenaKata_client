import BreadCrumb from '@/components/GlobalComponents/BreadCrumb';
import MainLayout from '@/components/Layouts/MainLayout'
import React from 'react'

const ProductCat = ({ params }) => {
    console.log(params);
    return (
        <MainLayout>
            <BreadCrumb />
            <h1 className='py-20 text-7xl'>{params.productCat}</h1>
        </MainLayout>
    )
}

export default ProductCat