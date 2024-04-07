import React from 'react'
import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"

const BreadCrumb = () => {
    return (
        <section className='py-5 border-b border-solid border-border'>
            <div className="container">
                <nav className="flex items-center justify-start gap-3 flex-wrap" >
                    <Link href="/" className="flex justify-center gap-1 items-center text-sm font-semibold text-skin-brand hover:text-skin-brandDark capitalize">
                        <Home size={16} />
                        Home
                    </Link>
                    <Link href="/" className="flex justify-center gap-1 items-center text-sm font-semibold text-skin-brand hover:text-skin-brandDark capitalize">
                        <ChevronRight size={20} strokeWidth={2.5} className='text-skin-textBody' />
                        Furits fsdaf efadf
                    </Link>
                    <span className="flex justify-center gap-1 items-center text-sm font-semibold text-skin-text  capitalize">
                        <ChevronRight size={20} strokeWidth={2.5} className='text-skin-textBody' />
                        banna  banna banna banna
                    </span>
                </nav>
            </div>
        </section>

    )
}

export default BreadCrumb