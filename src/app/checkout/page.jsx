import CheckoutBanner from '@/components/Checkout/CheckoutBanner'
import CheckoutProducts from '@/components/Checkout/CheckoutProducts'
import MainLayout from '@/components/Layouts/MainLayout'
import React from 'react'

const Checkout = () => {
    return (
        <MainLayout>
            <CheckoutBanner />
            <CheckoutProducts />
        </MainLayout>
    )
}

export default Checkout