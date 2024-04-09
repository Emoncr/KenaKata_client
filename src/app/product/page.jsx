import AllProducts from '@/components/All Pd page components/AllProducts';
import BreadCrumb from '@/components/GlobalComponents/BreadCrumb';
import MainLayout from '@/components/Layouts/MainLayout';
import React from 'react'

const AllProductsPage = () => {
    return (
        <MainLayout>
            <BreadCrumb />
            <AllProducts />
        </MainLayout>
    )
}

export default AllProductsPage