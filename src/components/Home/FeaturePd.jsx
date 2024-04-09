import React from 'react'
import FeatureSlider from '../Sliders/FeatureSlider'


const FeaturePd = () => {
    return (
        <section className='py-4'>
            <div className="container">
                <div className='flex items-start md:items-center justify-start gap-y-4 gap-x-8 lg:gap-x-12  flex-col md:flex-row'>
                    <div>
                        <h2 className='font-bold font-quicksand text-xl md:text-3xl text-skin-heading'>Featured Categories</h2>
                    </div>
                    <div className='flex items-center justify-start gap-5 flex-wrap'>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                        <p className='text-sm md:text-base font-quicksand font-semibold text-skin-heading'>Milk</p>
                    </div>
                </div>


                {/* Products sections */}
                <div className='feature_items mt-6 md:mt-10'>
                    <FeatureSlider />
                </div>
            </div>
        </section>
    )
}

export default FeaturePd