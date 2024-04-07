import { Headphones, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Amenities from "./Amenities"
import BottomBanner from "../Home/BottomBanner"
const SiteFooter = () => {
    return (
        <>
            <BottomBanner />
            <Amenities />
            <section className='py-5'>
                <div className="container">
                    <div className='grid items-start grid-cols-1 sm:grid-cols-12 gap-8 pb-10'>
                        <div className='col-span-12 sm:col-span-3'>
                            <div>
                                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/logo.png" alt="LOGO" />
                            </div>
                            <p className='text-skin-heading text-base font-normal mt-3 sm:mt-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                            <div className='mt-5'>
                                <p className='text-skin-heading text-base font-normal font-lato flex items-start justify-start gap-1'>
                                    <MapPin className='text-skin-brand mt-1' />
                                    <span>Address: <Link href={'/'} className='text-skin-brand'>5171 Banani, Dhaka, Bangladesh</Link></span>
                                </p>
                                <p className='text-skin-heading text-base font-normal font-lato flex items-start justify-start gap-1 my-4 '>
                                    <Headphones className='text-skin-brand ' />
                                    <span>Call Us  <Link href={'/'} className='text-skin-brand'>+880 1883049802</Link></span>
                                </p>
                                <p className='text-skin-heading text-base font-normal font-lato flex items-start justify-start gap-1'>
                                    <Mail className='text-skin-brand mt-1' />
                                    <span>Email <Link href={'/'} className='text-skin-brand'>biplobemon75945@gmail.com</Link></span>
                                </p>
                            </div>
                        </div>

                        <div className='col-span-12 sm:col-span-2'>
                            <div>
                                <h6 className='font-quicksand font-bold text-xl text-skin-heading'>Company</h6>
                            </div>
                            <div className='mt-5'>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>About Us</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Delivery Information</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Privacy Policy</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Contact Us</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Support Center</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Careers</Link>
                                </p>
                            </div>
                        </div>

                        <div className='col-span-12 sm:col-span-2'>
                            <div>
                                <h6 className='font-quicksand font-bold text-xl text-skin-heading'>Account</h6>
                            </div>
                            <div className='mt-5'>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>About Us</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Delivery Information</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Privacy Policy</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Contact Us</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Support Center</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Careers</Link>
                                </p>
                            </div>
                        </div>

                        <div className='col-span-12 sm:col-span-2'>
                            <div>
                                <h6 className='font-quicksand font-bold text-xl text-skin-heading'>Popular</h6>
                            </div>
                            <div className='mt-5'>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>About Us</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Delivery Information</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Privacy Policy</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Contact Us</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Support Center</Link>
                                </p>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    <Link href={'/'} className='text-skin-heading hover:text-skin-brand duration-300'>Careers</Link>
                                </p>
                            </div>
                        </div>

                        <div className='col-span-12 sm:col-span-3'>
                            <div>
                                <h6 className='font-quicksand font-bold text-xl text-skin-heading'>Install App</h6>
                            </div>
                            <div>
                                <p className='text-skin-heading text-base font-medium font-lato flex items-start justify-start gap-1 mt-3'>
                                    From App store & google play store
                                </p>
                            </div>
                            <div className="mt-4 flex items-center justify-start gap-5">
                                <Link href={'/'}>
                                    <img width={150} src="/icons/google-play.jpg" alt="img" />
                                </Link>
                                <Link href={'/'}>
                                    <img width={150} src="/icons/app-store.jpg" alt="img" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 border-solid border-border ">
                    <div className="container py-5 pb-2 flex items-start sm:items-center justify-between gap-5 flex-col sm:flex-row">
                        <p className="text-skin-text text-base font-medium font-lato flex items-start justify-start gap-1">© 2022 Kenakata. All rights reserved</p>
                        <div className="flex items-start sm:items-center justify-start gap-4 flex-col sm:flex-row">
                            <h6 className="text-skin-heading text-xl font-bold font-quicksand flex items-start justify-start gap-1">Follow Us</h6>
                            <div className="flex items-center justify-start gap-3">
                                <Link target="_blank" href={"https://www.facebook.com/biplobhasan.emon"} className="w-9 h-9 bg-skin-brand hover:bg-skin-brandDark rounded-full flex items-center justify-center text-white">
                                    <Facebook size={16} />
                                </Link>
                                <Link target="_blank" href={"https://www.linkedin.com/in/biplob-hasan-emon"} className="w-9 h-9 bg-skin-brand hover:bg-skin-brandDark rounded-full flex items-center justify-center text-white">
                                    <Linkedin size={16} />
                                </Link>
                                <Link target="_blank" href={"https://twitter.com/_Emon_dev"} className="w-9 h-9 bg-skin-brand hover:bg-skin-brandDark rounded-full flex items-center justify-center text-white">
                                    <Twitter size={16} />
                                </Link>
                                <Link target="_blank" href={"https://www.instagram.com/"} className="w-9 h-9 bg-skin-brand hover:bg-skin-brandDark rounded-full flex items-center justify-center text-white">
                                    <Instagram size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SiteFooter 