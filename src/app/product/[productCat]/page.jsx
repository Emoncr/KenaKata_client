import BreadCrumb from '@/components/GlobalComponents/BreadCrumb';
import MainLayout from '@/components/Layouts/MainLayout';
import React from 'react'

const ProductCat = ({ params }) => {
    console.log(params);
    return (
        <MainLayout>
            <BreadCrumb />
        </MainLayout>
    )
}

export default ProductCat