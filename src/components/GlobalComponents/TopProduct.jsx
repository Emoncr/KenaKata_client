import React from 'react'
import { Star } from 'lucide-react'
const TopProduct = () => {
    return (
        <div>
            <div>
                <h4 className='font-bold font-quicksand text-xl md:text-2xl text-skin-heading border-b border-border pb-4'>Top Products</h4>
                <div className='-mt-[2px] border border-skin-brand  w-[150px]' ></div>
            </div>
            <div className='mt-4 md:mt-7 grid grid-cols-1 gap-y-4 '>
                <div className='flex items-center justify-start gap-1'>
                    <img className='w-[100px]' src="/dummy/product-10-1.jpg" alt="Top selling" />
                    <div>
                        <h5 className='text-sm md:text-base font-quicksand font-bold text-skin-heading'>Haagen  Caramel Cone Ice Cream Boxed</h5>
                        <div className='flex items-center justify-start gap-0 mt-2'>
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <span className='ml-1'>1</span>
                        </div>
                        <p className='text-skin-heading font-quicksand text-base font-bold mt-1'>
                            <span className='text-skin-brand mr-2'>$23.85</span>
                            <span className='text-skin-muted text-xxs'><strike>$10.00</strike></span>
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-start gap-1'>
                    <img className='w-[100px]' src="/dummy/product-10-1.jpg" alt="Top selling" />
                    <div>
                        <h5 className='text-sm md:text-base font-quicksand font-bold text-skin-heading'>Haagen  Caramel Cone Ice Cream Boxed</h5>
                        <div className='flex items-center justify-start gap-0 mt-2'>
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <span className='ml-1'>1</span>
                        </div>
                        <p className='text-skin-heading font-quicksand text-base font-bold mt-1'>
                            <span className='text-skin-brand mr-2'>$23.85</span>
                            <span className='text-skin-muted text-xxs'><strike>$10.00</strike></span>
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-start gap-1'>
                    <img className='w-[100px]' src="/dummy/product-10-1.jpg" alt="Top selling" />
                    <div>
                        <h5 className='text-sm md:text-base font-quicksand font-bold text-skin-heading'>Haagen  Caramel Cone Ice Cream Boxed</h5>
                        <div className='flex items-center justify-start gap-0 mt-2'>
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <Star size={13} />
                            <span className='ml-1'>1</span>
                        </div>
                        <p className='text-skin-heading font-quicksand text-base font-bold mt-1'>
                            <span className='text-skin-brand mr-2'>$23.85</span>
                            <span className='text-skin-muted text-xxs'><strike>$10.00</strike></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProduct