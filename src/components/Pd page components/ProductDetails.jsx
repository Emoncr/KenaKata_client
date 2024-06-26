import React from 'react'
import { Star, Plus, Minus, ShoppingCart, Heart, GitCompareArrows } from "lucide-react"
import Link from "next/link"
import CommentForm from '../FormComponents/CommentForm'
import Product from '../GlobalComponents/Product'


const ProductDetails = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-5 items-start md:gap-x-6 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-14 gap-y-4'>
                <div className='col-span-1 md:col-span-2'>
                    <div className='bg-white rounded-2xl border border-solid border-border md:max-w-[420px]'>
                        <img className='w-full max-w-[420px]' src="/dummy/product-20-4-min.jpg" alt="product image" />
                    </div>
                </div>
                <div className='col-span-1 md:col-span-3'>
                    <div>
                        <p className='inline-block px-4 py-1.5 font-quicksand font-bold text-sm text-skin-brandDark bg-gray-200 rounded-md'>Sale</p>
                    </div>
                    <div className='mt-2 md:mt-5 '>
                        <h1 className='font-quicksand font-bold text-2xl md:text-xl lg:text-4xl text-skin-heading'>Organic Cage Grade A Large  Eggs</h1>
                        <div className="rating-box  mt-5">
                            <div className='flex items-center justify-start gap-0'>
                                <Star size={16} />
                                <Star size={16} />
                                <Star size={16} />
                                <Star size={16} />
                                <Star size={16} />
                                <div>
                                    <Link href={"/"} className='font-lato font-semibold text-sm ml-1 text-skin-brand hover:text-skin-brandDark'>(1 reviews)</Link>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div>
                                <p className='font-quicksand font-semibold text-lg sm:text-xl'>
                                    <span className='text-skin-muted text-sm sm:text-base' ><strike>$34</strike></span>
                                    <span className='text-skin-brand ml-2 font-bold'>$24</span>
                                </p>
                                <p className='mt-2 font-lato font-normal text-skin-text text-sm sm:text-base '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>

                                <p className='font-lato font-semibold text-base text-skin-warning mt-4'>26 in stock</p>
                            </div>
                            <div className='mt-3 flex items-center justify-start gap-2 sm:gap-4 lg:gap-5 '>
                                <div className='inline-flex items-center justify-between p-3 py-2 gap-3 sm:gap-6 border-2 border-solid border-skin-brand rounded-md'>
                                    <button className='text-skin-brand hover:text-skin-brandDark duration-200'>
                                        <Minus size={22} strokeWidth={2} />
                                    </button>
                                    <p className='font-quicksand font-bold text-base sm:text-xl text-skin-heading'>1</p>
                                    <button className='text-skin-brand hover:text-skin-brandDark duration-200 '>
                                        <Plus size={22} strokeWidth={2} />
                                    </button>
                                </div>
                                <div>
                                    <button className='py-3 px-5 font-quicksand font-bold text-white bg-skin-brand hover:bg-skin-brandDark duration-300 flex items-center justify-center gap-1 rounded-md text-sm sm:text-base'>
                                        <ShoppingCart size={20} />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className='mt-3 flex items-center justify-start gap-2 sm:gap-4 lg:gap-5 '>
                                <div>
                                    <button className='py-2.5 border-2 border-border px-5 font-quicksand font-bold text-heading hover:text-white bg-transparent hover:bg-skin-brand duration-200 flex items-center justify-center gap-1 rounded-md text-sm sm:text-base'>
                                        <GitCompareArrows size={20} />
                                        Compare
                                    </button>
                                </div>
                                <div>
                                    <button className='py-2.5 border-2 border-border px-5 font-quicksand font-bold text-heading hover:text-white bg-transparent hover:bg-skin-brand duration-200 flex items-center justify-center gap-1 rounded-md text-sm sm:text-base'>
                                        <Heart size={20} />
                                        WishList
                                    </button>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <ul className='grid items-start grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-2'>
                                    <li className='text-sm  text-skin-brandDark font-medium font-lato'><span className='text-skin-text mr-1'>Type:</span>Furit</li>
                                    <li className='text-sm  text-skin-brandDark font-medium font-lato'><span className='text-skin-text mr-1'>Category:</span> Baking material, Bread and Juice</li>
                                    <li className='text-sm  text-skin-brandDark font-medium font-lato'><span className='text-skin-text mr-1'>MFG:</span>11 Jan 2021</li>
                                    <li className='text-sm  text-skin-brandDark font-medium font-lato'><span className='text-skin-text mr-1'>LIFE:</span> 3 Months</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product_info border border-solid rounded-2xl border-border mt-5 lg:mt-10 p-4 sm:p-5 lg:p-8 xl:p-10'>
                <div className='flex items-start justify-start gap-4'>
                    <button className='px-5 py-3 border border-solid rounded-lg font-semibold  font-quicksand duration-200 border-border text-skin-muted'>Description</button>

                    <button className='px-5 py-3 duration-200 text-white border border-solid rounded-lg font-semibold  font-quicksand border-transparent bg-skin-brand hover:bg-skin-brandDark text-skin-muted'>Review</button>
                </div>
                <div className='mt-4'>
                    <p className='text-skin-text font-lato font-medium text-base'>
                        Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.

                        Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                    </p>
                </div>

                <div>
                    <h5 className='text-skin-heading text-lg lg:text-2xl  font-bold font-quicksand '>1 review for Haagen Caramel Cone Ice Cream Boxed</h5>
                    <div className='mt-2'>
                        <div className='flex items-start justify-start gap-1'>
                            <img src="/dummy/avater.png" alt="Avater Image" className='rounded-full h-10 w-10' />
                            <div className='border border-border_2 rounded-md w-full p-2'>
                                <div className='flex items-start justify-between flex-col md:flex-row'>
                                    <p className='font-quicksand font-bold text-skin-heading  text-sm lg:text-base '>Headman Academy</p>
                                    <div className='flex items-center justify-start gap-0'>
                                        <Star size={16} />
                                        <Star size={16} />
                                        <Star size={16} />
                                        <Star size={16} />
                                        <Star size={16} />
                                    </div>
                                </div>
                                <p className='mt-3 font-lato font-medium text-sm lg:text-base text-skin-text  '>Okay</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h5 className='text-skin-heading text-lg lg:text-2xl  font-bold font-quicksand '>Add a review</h5>
                        <p className='text-skin-text font-lato font-medium text-base mt-3'>
                            Your email address will not be published. Required fields are marked *
                        </p>

                        <CommentForm />
                    </div>
                </div>
            </div>
            <div className='mt-5 lg:mt-8'>
                <div>
                    <h4 className='font-bold font-quicksand text-xl md:text-2xl text-skin-heading border-b border-border pb-4'>Related Products</h4>
                    <div className='-mt-[2px] border border-skin-brand  w-[210px]' ></div>
                </div>
                <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div >
    )
}

export default ProductDetails