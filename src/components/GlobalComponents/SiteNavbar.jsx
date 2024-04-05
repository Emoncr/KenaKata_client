import { Grid2X2, Flame, ChevronDown, Headset } from 'lucide-react'
import Link from "next/link"
const SiteNavbar = () => {
    return (
        <nav>
            <ul className='flex items-center justify-center gap-12'>
                <li>
                    <Link
                        className='bg-transparent text-skin-heading duration-500 hover:text-skin-brandDark text-base font-bold font-quicksand flex items-center justify-start gap-1'
                        href={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className='bg-transparent   text-skin-heading duration-500 hover:text-skin-brandDark text-base font-bold font-quicksand flex items-center justify-start gap-1'
                        href={"/"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className='bg-transparent   text-skin-heading duration-500 hover:text-skin-brandDark text-base font-bold font-quicksand flex items-center justify-start gap-1'
                        href={"/"}>
                        Shop
                        <ChevronDown className='mt-1' size={20} />
                    </Link>
                </li>
                <li>
                    <Link
                        className='bg-transparent   text-skin-heading duration-500 hover:text-skin-brandDark text-base font-bold font-quicksand flex items-center justify-start gap-1'
                        href={"/"}>
                        Products
                        <ChevronDown className='mt-1' size={20} />
                    </Link>
                </li>
                <li>
                    <Link
                        className='bg-transparent   text-skin-heading duration-500 hover:text-skin-brandDark text-base font-bold font-quicksand flex items-center justify-start gap-1'
                        href={"/"}>
                        Blog
                        <ChevronDown className='mt-1' size={20} />
                    </Link>
                </li>
                <li>
                    <Link
                        className='bg-transparent   text-skin-heading duration-500 hover:text-skin-brandDark text-base font-bold font-quicksand flex items-center justify-start gap-1'
                        href={"/"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default SiteNavbar