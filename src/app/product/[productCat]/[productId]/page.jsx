import BreadCrumb from '@/components/GlobalComponents/BreadCrumb'
import MainLayout from '@/components/Layouts/MainLayout'
import ProductDetails from '@/components/Pd page components/ProductDetails'
import SiteItems from '@/components/Pd page components/SiteItems'
import React from 'react'

const ProductPage = () => {
  return (
    <>
      <MainLayout>
        <BreadCrumb />

        <section className='py-5 lg:py-10'>
          <div className="pd_page_container grid grid-cols-1 lg:grid-cols-11 items-start gap-x-10 gap-y-7">
            {/* Product Details Component */}
            <div className='col-span-1 lg:col-span-8'>
              <ProductDetails />
            </div>
            <div className='col-span-1 lg:col-span-3'>
              <SiteItems />
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default ProductPage