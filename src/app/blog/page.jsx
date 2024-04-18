import MainLayout from '@/components/Layouts/MainLayout'
import React from 'react'

const Blog = () => {
    return (
        <MainLayout>
            <section className='py-10 lg:py-16'>
                <div className="max-w-[1400px] mx-auto">
                    <div>
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-skin-heading font-quicksand'>Read Our Blogs</h1>
                        <p className='text-sm sm:text-base lg:text-xl font-lato text-skin-secondary font-semibold mt-6'>
                            No blogs published yet
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Blog